import { Inject, Injectable, Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import {Router} from "@angular/router"
import { Page } from 'ui/page'
import { Color } from 'color'
import { TextField } from 'ui/text-field'
import { screen } from "platform"
import {SignupDTO} from '../../types'
import {LoginService} from './login.service'
import {UserFactory} from '../../factories/user.factory'
import { setHintColor } from '../../util/nativeElements'
import {Http, Response} from '@angular/http'
var frameModule = require('ui/frame');
var pageModule = require('ui/page');
var webViewModule = require("ui/web-view");
import { WebView, LoadEventData } from 'ui/web-view'
import * as Rx from 'rxjs/Rx'
import * as utils from 'utils/utils'
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs'

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.template.html', 
    styleUrls: ['./login.css'],
    directives: [],
    providers: [LoginService]
})

export class LoginComponent implements OnInit {
    
    public isAuthenticating : boolean
    public heightDIPs       : number
    public widthDIPs        : number
    @ViewChild("usernameTxt")   public usernameView   : ElementRef
    @ViewChild("passwordTxt")   public passwordView   : ElementRef
    @ViewChild("oauthWebView")  public oauthWebView   : WebView

    private baseUrl : string = 'http://tradepackers.asuramedia.com:9000/'
    
constructor (private _router        : Router, 
             private _page          : Page, 
             private _loginService  : LoginService,
             public _userFactory    : UserFactory,
             private _http          : Http) {
                     
        this._page.actionBarHidden = true
        
    }
    
    ngOnInit () {
        this.heightDIPs = screen.mainScreen.heightDIPs
        this.widthDIPs = screen.mainScreen.widthDIPs
        const usernameView = <TextField> this.usernameView.nativeElement
        const passwordView = <TextField> this.passwordView.nativeElement
        setHintColor( { view: usernameView, color: new Color('#abaeb3') } )
        setHintColor( { view: passwordView, color: new Color('#abaeb3') } )
    }
    
    login () : void {

            this._page.animate({
                       translate: { x: -this._page.getMeasuredHeight(), y: 0 },
                       duration: 300
                   })
                    .then(() => { this._router.navigate(['/main']) })
    }
    
    signup () : void {
        
        this._page.animate({
                translate: { x: this._page.getMeasuredHeight(), y: 0 },
                duration: 300
            })
            .then(() => { this._router.navigate(['/signup']) })
        
    }

    socialAuth ( provider: string ) : void {
        let social = this._page.getViewById(provider)
            social.animate({
                scale: { x: 1.2, y: 1.2 },
                duration: 100,
                iterations: 2
            })
                .then(() => {
                    social.animate({
                        scale: { x: 1.0, y: 1.0 },
                        duration: 50
                    })
                })
                .then(() => {
                    this.getSocialAuthUrl(provider)
                        .subscribe((response: Response) => {
                            console.log(response)
                        })
                })
    }

    public getSocialAuthUrl ( provider: string ) : any {

        let webView: WebView = new webViewModule.WebView();

        const http = this._http
        const callback = (args: LoadEventData) => {
            console.log("loadFinishedEvent called", args)
            let decodedUrl = args.url

            if (  args.url.indexOf('tradepackers.asuramedia.com') !== -1 &&
                  args.url.indexOf('redirect_uri') === -1 ) {
                
                decodedUrl = decodedUrl.replace('#_=_', '')
                decodedUrl = this.updateQueryStringParameter( decodedUrl, 'getToken', 'please' )

                http.get( decodedUrl )
                    .catch( (ex) => {
                        return ex
                    } )
                    .subscribe( ( result: Response ) => {
                        const json = result.json()
                        if ( result.status === 200 ) {
                            let token = json.Token
                            console.log('TOKEN::::', token)
                            utils.openUrl('TradePackersMobile')
                        }
                    } )
            }
        }

        const redirectUrl = `${this.baseUrl}social/${provider}`
        return this._http.get( redirectUrl )
            .catch( (ex) => {
                console.log(JSON.stringify(ex))
                return ex
            } )
            .map( ( result: Response ) => {
                if ( result.status === 200 ) {
                    const data = result.json()
                var factoryFunc = () => {
                    webView.url = decodeURIComponent(data.url);
                    webView.on(WebView.loadStartedEvent, callback);
                    var page: Page = new pageModule.Page();
                    this._page.content = webView;
                    return this._page;
                };

                    frameModule.topmost().navigate(factoryFunc);

                }
            } )

            
    }

    private updateQueryStringParameter(uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            return uri + separator + key + "=" + value;
        }
    }
}