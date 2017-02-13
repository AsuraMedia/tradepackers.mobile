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
    template: 
        `   <side-drawer>
                <StackLayout style="width:100%;height:80%;">
                    <label text="Menu principal" 
                            horizontalAlignment="center" 
                            style="color:snow">
                    </label>
                </StackLayout>
            </side-drawer>
            <StackLayout orientation="vertical" modal-dialog-host>
            </StackLayout>
        `, 
    styleUrls: [],
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
        this.getMainInfo()
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