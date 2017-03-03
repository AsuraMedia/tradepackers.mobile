import { Page } from 'ui/page'
import * as Rx from 'rxjs/Rx'
import { Router, Params, ActivatedRoute } from '@angular/router'
import { Inject, Injectable, Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core'
import { Pack, PackType } from '../../types'
import { PackService } from '../../services/pack.service'
import { TwitterBang, ITwitterBangOptions } from 'nativescript-twitterbang'
const Explosion = require( 'nativescript-explosionfield' )

@Component({
    moduleId: module.id,
    selector: 'open-pack',
    templateUrl: './openPack.template.html', 
    styleUrls: ['./openPack.css'],
    providers: [],
    directives: [] 
})

export class OpenPackComponent implements OnInit, AfterViewInit {
    
    public pack: Pack = this.packService.currentPack
    public packsArray: Pack[] = []
    
    constructor ( private _page : Page,
                private apply: ChangeDetectorRef,
                private router: Router,
                private packService: PackService ) {

        this._page.actionBarHidden = true
        this._page.on("loaded", this.onLoaded, this)
    }

    public onLoaded(args) {
        this.packsArray = []
        this.packsArray.push( this.packService.currentPack )
        this.apply.detectChanges()
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
        .then( x => packElement.translateX = 0 )
        .then( x => Explosion.explode( packElement ) )
        .then( x => {
            setTimeout( () => {
                this.router.navigate(['/browsepacks'])
            }, 1000)
        } )

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