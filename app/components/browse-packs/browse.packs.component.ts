import {Page} from 'ui/page'
import {Router} from '@angular/router'
import {Inject, Injectable, Component, OnInit, ViewChild} from '@angular/core'
import {SideDrawer} from '../../components/side-drawer/side.drawer.component'

@Component({
    moduleId: module.id,
    selector: 'browse-packs',
    templateUrl: './browsePacks.template.html', 
    styleUrls: ['./browsePacks.css'],
    directives: [SideDrawer] 
})

export class BrowsePacksComponent implements OnInit {
    
    public name : String
    
    constructor (private _page : Page) {
        this._page.actionBarHidden = true
    }
    
    ngOnInit () {
        
        
    }
    
}