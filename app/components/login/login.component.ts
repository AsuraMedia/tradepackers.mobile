import { Inject, Injectable, Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, AfterViewInit } from '@angular/core'
import {Router} from "@angular/router"
import { Page } from 'ui/page'
import { Color } from 'color'
import { TextField } from 'ui/text-field'
import { screen } from "platform"
import { SignupDTO, OAuthInfo } from '../../types'
import {LoginService} from './login.service'
import {UserFactory} from '../../factories/user.factory'
import { setHintColor } from '../../util/nativeElements'
import {Http, Response} from '@angular/http'
var webViewModule = require("ui/web-view");
import { WebView, LoadEventData } from 'ui/web-view'
import * as Rx from 'rxjs/Rx'
import * as utils from 'utils/utils'
import * as Modal from "nativescript-angular/modal-dialog"
import { SocialOauthModal } from './modal.component'
import { LoadingModalComponent } from '../loading-modal/loadingModal.component'
import * as LocalStorage from 'application-settings'
import { EventsService } from '../../util/event.service'
import { urlConfig } from '../../util/urlConfig'
import { TeamService } from '../../services/team.service'

const modalOptions: Modal.ModalDialogOptions = {
    fullscreen: false
}

let page: Page

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.template.html', 
    styleUrls: ['./login.css'],
    directives: [ Modal.ModalDialogHost ],
    providers: [ LoginService, Modal.ModalDialogService, EventsService, TeamService ]
})

export class LoginComponent implements OnInit, AfterViewInit {
    
    public isAuthenticating : boolean
    public heightDIPs       : number
    public widthDIPs        : number
    @ViewChild("usernameTxt")   public usernameView   : ElementRef
    @ViewChild("passwordTxt")   public passwordView   : ElementRef
    @ViewChild("oauthWebView")  public oauthWebView   : WebView

    private baseUrl : string = urlConfig.getUrl('api')
    
constructor (private _router        : Router, 
             private _page          : Page, 
             @Inject(LoginService) private _loginService  : LoginService,
             public _userFactory    : UserFactory,
             private _http          : Http,
             private modalService   : Modal.ModalDialogService,
             private eventsService  : EventsService,
             private teamService    : TeamService ) {

        page = this._page                     
        this._page.actionBarHidden = true
        this._page.on("loaded", this.onLoaded, this)
        LoadingModalComponent.registerListeners( eventsService )

    }
    
    ngOnInit () {

        LoadingModalComponent.showModal(this.modalService)

        this.heightDIPs = screen.mainScreen.heightDIPs
        this.widthDIPs = screen.mainScreen.widthDIPs
        const usernameView = <TextField> this.usernameView.nativeElement
        const passwordView = <TextField> this.passwordView.nativeElement
        setHintColor( { view: usernameView, color: new Color('#9f9f9f') } )
        setHintColor( { view: passwordView, color: new Color('#9f9f9f') } )

    }

    ngAfterViewInit () {

        setTimeout( () => {
           const token = LocalStorage.getString('oauth-token') 
           if ( this._loginService.isAuthenticated() ) {
                this.teamService.getTeam()
                    .catch( ( error: Response ) => {
                        console.log('ERROR::::', JSON.stringify(error))
                        return Rx.Observable.of( error )
                    } )
                    .subscribe( ( response: Response ) => {
                        console.log('GETEAM::::', JSON.stringify(response))
                        const data = response.json()
                        if ( response.status === 200 && data ) {
                            this.eventsService.broadcast( 'loadingModalEvent', 'close' )
                            this._router.navigate(['/main'])
                        } else {
                            this.eventsService.broadcast( 'loadingModalEvent', 'close' )
                            this._router.navigate(['/createteam'])
                        }
                    } )
           } else {
               LocalStorage.clear()
               this.eventsService.broadcast( 'loadingModalEvent', 'close' )
           }
        }, 2000)

    }

    public onLoaded(args) {
        
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

        
         this.modalService.showModal( LoadingModalComponent, modalOptions )
            .then( ( res ) => {
                
            } )

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

        const redirectUrl = `${urlConfig.getUrl('oauth')}/${provider}`
        return this._http.get( redirectUrl )
            .catch( (ex) => {
                return ex
            } )
            .map( ( result: Response ) => {
                if ( result.status === 200 ) {

                    this.eventsService.broadcast( 'loadingModalEvent', 'close' )
                    const data = result.json()
                    LocalStorage.setString('webView-url', decodeURIComponent(data.url))

                    this.modalService.showModal( SocialOauthModal, modalOptions )
                        .then( ( res ) => {
                            const token: OAuthInfo = JSON.parse( LocalStorage.getString('oauth-token') )
                            if ( token !== undefined ) {
                                this.teamService.getTeam()
                                    .subscribe( ( response: Response ) => {
                                        const data = response.json()
                                        if ( response.status === 200 && data ) {
                                            this._router.navigate(['/main'])
                                        } else {
                                            this._router.navigate(['/createteam'])
                                        }
                                    } )
                            }
                        } )
                }
            } )

            
    }
}