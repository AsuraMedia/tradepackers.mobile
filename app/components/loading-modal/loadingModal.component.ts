import { Component, ElementRef, OnInit, ViewChild, NgZone, Inject } from "@angular/core";
import {ModalDialogParams} from "nativescript-angular/modal-dialog";
import {Page} from "ui/page";
import {ListView} from "ui/list-view";
import { Router } from "@angular/router"
var webViewModule = require("ui/web-view");
import { WebView, LoadEventData } from 'ui/web-view'
import * as LocalStorage from 'application-settings'
import {Http, Response} from '@angular/http'
import { EventsService } from '../../util/event.service'

let http: Http, router: Router, page:Page

const handleEvents  = ( event: any ) => {
    if ( event === 'close' ) {
        page.closeModal()
    }
}

@Component({
  selector: "loading-modal",
  template: `<StackLayout id="loadingModal">
                <label text="LOADING..."></label> 
            </StackLayout>`,
  providers: [ EventsService ]
})

export class LoadingModalComponent implements OnInit {

    constructor ( private params: ModalDialogParams,
                  private _page: Page,
                  @Inject(EventsService) private eventsService: EventsService ) {

        page    = this._page

    }

    static registerListeners ( eventsService ) {
        eventsService.on( 'loadingModalEvent', ( event: any ) => {
            handleEvents( event )
        } )
    }

    ngOnInit () {

    }

}