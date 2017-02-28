import {topmost} from "ui/frame"
import {Page} from "ui/page"
import {Observable, EventData} from "data/observable"
import {View} from "ui/core/view"
import {Router} from "@angular/router"
import {Inject, Injectable, Component, OnInit, ViewChild, Input} from '@angular/core'
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router"
import MenuOptionService from './menu.option.service'
import MenuOptionFactory from './menu.option.factory'

@Component({
    moduleId: module.id,
    selector: 'menu-options',
    templateUrl: './menu.option.template.html',
    styleUrls: ['./menuOption.css'],
    providers : [MenuOptionService],
    directives: [NS_ROUTER_DIRECTIVES]
})

@Injectable()
export class MenuOptionComponent implements OnInit { 
    
    private _menuOptionService : MenuOptionService
    @Input() _menuOptions : MenuOptionFactory []
    
    constructor (private _router : Router, private page : Page) {
        
    }
    
    ngOnInit () {
        
        this._menuOptionService = new MenuOptionService()
        
        this._menuOptionService.getOptions()
            .then((_menuOptions : MenuOptionFactory []) => { 
                this._menuOptions = _menuOptions
            })
    }
    
    private navigate (option : MenuOptionFactory) : void {
        option.navigate(this._router)
    }

    public goToAvatar (id : string) : void {

        let avatar = this.page.getViewById(id)
            avatar.animate({
                scale: { x: 1.1, y: 1.1 },
                duration: 100,
                iterations: 2
            })
                .then(() => {
                    avatar.animate({
                        scale: { x: 1.0, y: 1.0 },
                        duration: 50
                    })
                })
                .then( () => {
                    this._router.navigate(['/browsepacks'])
                } )

    }
    
}