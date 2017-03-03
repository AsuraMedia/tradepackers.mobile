import { Page } from 'ui/page'
import * as Rx from 'rxjs/Rx'
import { Router, Params, ActivatedRoute } from '@angular/router'
import { Inject, Injectable, Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core'
import {SideDrawer} from '../../components/side-drawer/side.drawer.component'
import { Pack, PackType } from '../../types'
import { PackService } from '../../services/pack.service'
import { TwitterBang, ITwitterBangOptions } from 'nativescript-twitterbang'

@Component({
    moduleId: module.id,
    selector: 'open-pack',
    templateUrl: './openPack.template.html', 
    styleUrls: ['./openPack.css'],
    providers: [],
    directives: [ SideDrawer ] 
})

export class OpenPackComponent implements OnInit, AfterViewInit {
    
    public pack: Pack = this.packService.currentPack
    
    constructor ( private _page : Page,
                private apply: ChangeDetectorRef,
                private router: Router,
                private packService: PackService ) {

        this._page.actionBarHidden = true
    }
    
    ngOnInit () {
        
    } 

    ngAfterViewInit () {

        console.log( 'CURRENT PACK:::::', JSON.stringify( this.pack ) )

    }

    open () {

        let openBtn = this._page.getViewById('openBtn')
        this.bangOpenBtn( openBtn )

        let packElement = this._page.getViewById('packElement')

        packElement.animate({
            translate: { x: 1, y: 0 },
            duration: 50,
            iterations: 16
        })
        .then( () => {
            packElement.animate({
                translate: { x: 3, y: 0 },
                duration: 75,
                iterations: 8
            })
        } )
        .then(() => { packElement.translateX = 0 })

    }

    bangOpenBtn ( view ) {

        let opts: ITwitterBangOptions = {
        view: view,
        dotNumber: 40,
        colors: [ '#fedb17', '#424242', '#fffff' ]
    }
        // Execute the TwitterBang() method passing the options object.
        TwitterBang(opts);

    }
}