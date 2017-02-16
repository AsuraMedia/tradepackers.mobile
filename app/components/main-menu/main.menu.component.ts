import { Inject, Injectable, Component, OnInit, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core'
import {SideDrawer} from '../side-drawer/side.drawer.component'
import {Router} from "@angular/router"
import {Page} from 'ui/page'
import * as Modal from "nativescript-angular/modal-dialog"
import { LoadingModalComponent } from '../loading-modal/loadingModal.component'
import { EventsService } from '../../util/event.service'

@Component({
    moduleId: module.id,
    selector: 'main-menu',
    templateUrl: './mainMenu.template.html', 
    styleUrls: ['./mainMenu.css'],
    directives: [ SideDrawer, Modal.ModalDialogHost ],
    providers: [ Modal.ModalDialogService, EventsService ]
})

export class MainMenuComponent implements OnInit, AfterViewInit  {
    
    constructor ( 
        private _page : Page,
        private modalService: Modal.ModalDialogService,
        private eventsService  : EventsService ) {

        this._page.actionBarHidden = true
        this._page.on("loaded", this.onLoaded, this)
        LoadingModalComponent.registerListeners( this.eventsService )

    }
    
    ngOnInit () {
        
    }

    ngAfterViewInit () {
        
    }

    public onLoaded(args) {
        
    }

    public getMainInfo (): void {
        
        LoadingModalComponent.showModal( this.modalService )

        setTimeout( () => {
            this.eventsService.broadcast( 'loadingModalEvent', 'close' )
        }, 3000);
    }
    
}