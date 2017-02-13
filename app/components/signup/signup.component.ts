import {Inject, Injectable, Component, OnInit, ViewChild, ElementRef} from '@angular/core'
import {Router} from "@angular/router"
import {Page} from 'ui/page'
import {screen} from "platform"
import {SignupDTO} from '../../types'
import {SignupFactory} from '../../components/signup/signup.factory'
import {UserFactory} from '../../factories/user.factory'
import {Errors} from '../../util/errors/errors'
import { TextField } from 'ui/text-field'
import { Color } from 'color'
import { setHintColor } from '../../util/nativeElements'

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: './signup.template.html', 
    styleUrls: ['./signup.css'],
    directives: [],
    providers: [] 
})

@Injectable()
export class SignupComponent implements OnInit {
    
    private errors : Errors
    public isRegistering : boolean = false

    @ViewChild("emailTxt")          public emailTxt             : ElementRef
    @ViewChild("usernameTxt")       public usernameTxt          : ElementRef
    @ViewChild("passwordTxt")       public passwordTxt          : ElementRef
    @ViewChild("passwordRepeatTxt") public passwordRepeatTxt    : ElementRef
    
    constructor (private _router         : Router, 
                 private _page           : Page,
                 private _userFactory    : UserFactory,
                 private _signupFactory  : SignupFactory) {
                     
        this._page.actionBarHidden = true
        this._page.on("loaded", this.onLoaded, this)
        this.errors = new Errors()
        this.errors.clear()
    }
    
    ngOnInit () {

    }

    public onLoaded(args) {
        const emailTxt = <TextField> this.emailTxt.nativeElement
        const usernameTxt = <TextField> this.usernameTxt.nativeElement
        const passwordTxt = <TextField> this.passwordTxt.nativeElement
        const passwordRepeatTxt = <TextField> this.passwordRepeatTxt.nativeElement
        setHintColor( { view: emailTxt, color: new Color('#9f9f9f') } )
        setHintColor( { view: usernameTxt, color: new Color('#9f9f9f') } )
        setHintColor( { view: passwordTxt, color: new Color('#9f9f9f') } )
        setHintColor( { view: passwordRepeatTxt, color: new Color('#9f9f9f') } )
    }
    
    register () : void {
        
        this._userFactory.register()
            .subscribe((ok : boolean) => {
                if (ok) {
                    this.isRegistering = false
                    this._router.navigate(['/'])
                } else {
                    let signup = this._page.getViewById('signup')
                    signup.animate({
                        translate: { x: 5, y: 0 },
                        duration: 125,
                        iterations: 4
                    })
                    .then(() => { signup.translateX = 0 })
                }
            })
       
    }
    
    cancel () : void {
        
        this._page.animate({
                translate: { x: -this._page.getMeasuredHeight(), y: 0 },
                duration: 300
            })
            .then(() => { this._router.navigate(['/']) })
    }
    
}