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
import * as Modal from "nativescript-angular/modal-dialog"
import { ListPicker } from './modal.component'
import * as LocalStorage from 'application-settings'

const modalOptions: Modal.ModalDialogOptions = {
    fullscreen: false
}

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.template.html', 
    styleUrls: ['./login.css'],
    directives: [ Modal.ModalDialogHost ],
    providers: [ LoginService, Modal.ModalDialogService ]
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
             @Inject(LoginService) private _loginService  : LoginService,
             public _userFactory    : UserFactory,
             private _http          : Http,
             private modalService   : Modal.ModalDialogService) {
                     
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
    
    showModal () : Promise<any> {
        return this.modalService.showModal( ListPicker, modalOptions )
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

        const redirectUrl = `${this.baseUrl}social/${provider}`
        return this._http.get( redirectUrl )
            .catch( (ex) => {
                console.log( 'ERROR::::', ex ) 
                console.log(JSON.stringify(ex))
                return ex
            } )
            .map( ( result: Response ) => {
                if ( result.status === 200 ) {

                    const data = result.json()
                    this._loginService.webViewUrl = decodeURIComponent( data.url )
                    LocalStorage.setString('webView-url', decodeURIComponent(data.url))
                    console.log( 'LOGIN SERVICE URL::::', this._loginService.webViewUrl )
                    
                    this.modalService.showModal( ListPicker, modalOptions )
                        .then( ( res ) => {
                            console.log('MODAL::::', res)
                            this._router.navigate(['/main'])
                        } )

                // var factoryFunc = () => {
                //     console.log( 'FACTORY FUNC::::', data.url ); 
                //     webView.url = decodeURIComponent(data.url);
                //     webView.notifyPropertyChange('url', data.url);
                //     webView.on(WebView.loadStartedEvent, callback);
                //     var page: Page = new pageModule.Page();
                //     this._page.content = webView;
                //     return this._page;
                // };

                //     frameModule.topmost().navigate(factoryFunc);

                }
            } )

            
    }
}