import { Inject, Injectable, Component, OnInit, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core'
import {SideDrawer} from '../side-drawer/side.drawer.component'
import {Router} from "@angular/router"
import { Response } from '@angular/http'
import {Page} from 'ui/page'
import * as Modal from "nativescript-angular/modal-dialog"
import { LoadingModalComponent } from '../loading-modal/loadingModal.component'
import { EventsService } from '../../util/event.service'
import { MainMenuService } from './mainMenu.service'
import { Team } from '../../types'

@Component({
    moduleId: module.id,
    selector: 'main-menu',
    templateUrl: './mainMenu.template.html', 
    styleUrls: ['./mainMenu.css'],
    directives: [ SideDrawer, Modal.ModalDialogHost ],
    providers: [ Modal.ModalDialogService, EventsService, MainMenuService ]
})

export class MainMenuComponent implements OnInit, AfterViewInit  {
    
    public teamInfo: Team = { 
        name: '',
        abbreviation: '',
        dateCreated: '',
        badge: { 
            id: '', 
            name: '', 
            col: '', 
            isSelected: false, 
            imgUrl: '', 
            region: { 
                id: '', 
                name: '' 
            } 
        } }

    constructor ( 
        private _page : Page,
        private modalService: Modal.ModalDialogService,
        private eventsService  : EventsService,
        private mainMenuService : MainMenuService ) {

        this._page.actionBarHidden = true
        this._page.on("loaded", this.onLoaded, this)
        LoadingModalComponent.registerListeners( this.eventsService )

    }
    
    ngOnInit () {
        
    }

    ngAfterViewInit () {
        this.getMainInfo()
    }

    public onLoaded(args) {
        
    }

    public getMainInfo (): void {
        
        LoadingModalComponent.showModal( this.modalService )

        this.mainMenuService.getTeamInfo()
            .subscribe( ( result: Response ) => {
                if ( result.status === 200 ) {
                    this.teamInfo = result.json()
                    console.log( 'TEAM JSON:::', JSON.stringify( this.teamInfo ) )
                    this.eventsService.broadcast( 'loadingModalEvent', 'close' )
                }
            } )
    }
    
}