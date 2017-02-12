import { Inject, Injectable, Component, OnInit, ViewChild } from '@angular/core'
import {SideDrawer} from '../side-drawer/side.drawer.component'
import {Router} from "@angular/router"
import {Page} from 'ui/page'

@Component({
    moduleId: module.id,
    selector: 'main-menu',
    template: 
        `   <side-drawer>
                <StackLayout style="width:100%;height:80%;">
                    <label text="I am the main menu!" 
                            horizontalAlignment="center" 
                            style="color:snow">
                    </label>
                </StackLayout>
            </side-drawer>
        `, 
    styleUrls: [],
    directives: [SideDrawer] 
})

export class MainMenuComponent implements OnInit {
    
    constructor (private _page : Page) {
        this._page.actionBarHidden = true
    }
    
    ngOnInit () {
        
    }
    
}