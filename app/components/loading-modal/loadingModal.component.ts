import { Component, ElementRef, OnInit, ViewChild, NgZone, Inject } from "@angular/core";
import {ModalDialogParams} from "nativescript-angular/modal-dialog";
import {Page} from "ui/page";
import { EventsService } from '../../util/event.service'
import * as Modal from "nativescript-angular/modal-dialog"

let page: Page

const handleEvents  = ( event: any ) => {
    if ( event === 'close' ) {
        page.closeModal()
    }
}

@Component({
  selector: "loading-modal",
  template: `<StackLayout id="loadingModal">
                <label text="CARGANDO..."></label> 
            </StackLayout>`,
  providers: [ EventsService, Modal.ModalDialogService ]
})

export class LoadingModalComponent implements OnInit {

    constructor ( private params: ModalDialogParams,
                  private _page: Page,
                  private modalService: Modal.ModalDialogService,
                  @Inject(EventsService) private eventsService: EventsService ) {

        page    = this._page

    }

    ngOnInit () {

    }

    public static registerListeners ( eventsService ) {
        eventsService.on( 'loadingModalEvent', ( event: any ) => {
            handleEvents( event )
        } )
    }

    public static showModal ( modalService: Modal.ModalDialogService ): void {
        setTimeout( () => {
           modalService.showModal( this, {
                fullscreen: false 
            } ).then( () => { console.log('loading closed...') } )
        }, 0)
    }

}