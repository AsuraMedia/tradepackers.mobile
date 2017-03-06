import {Page} from 'ui/page'
import * as Rx from 'rxjs/Rx'
import { Router, Params } from '@angular/router'
import { Inject, Injectable, Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core'
import { Http, Response, Request, RequestOptions, RequestMethod, Headers } from '@angular/http'
import {SideDrawer} from '../../components/side-drawer/side.drawer.component'
import { Pack, PackType } from '../../types'
import { PackService } from '../../services/pack.service'
import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from 'ui/segmented-bar'

@Component({
    moduleId: module.id,
    selector: 'browse-packs',
    templateUrl: './browsePacks.template.html', 
    styleUrls: ['./browsePacks.css'],
    providers: [],
    directives: [ SideDrawer ] 
})

export class BrowsePacksComponent implements OnInit, AfterViewInit {
    
    @ViewChild("tabs") tabs: ElementRef;

    public packTypes: any[] = [
        { title: PackType[PackType.BASIC] }, 
        { title: PackType[PackType.PLUS] }, 
        { title: PackType[PackType.PREMIUM] }
    ]

    public packOptions: Pack[]
    public selectedPackType: number = PackType.BASIC

    constructor ( private _page : Page, 
                public packService: PackService, 
                private apply: ChangeDetectorRef,
                private router: Router ) {

        this._page.actionBarHidden = true
        this._page.on("loaded", this.onLoaded, this)
    }

    public onLoaded( args ) {

        this.getPackOptions()

        this.tabs.nativeElement.on( SegmentedBar.selectedIndexChangedEvent, (args: SelectedIndexChangedEventData) => {
            this.selectedPackType = args.newIndex
            this.getPackOptions()
        })
        
    }

    ngAfterViewInit () {
        
    }
    
    ngOnInit () {
        
    }

    getPackOptions (): void {
        this.packService.getPackOptions( this.selectedPackType )
            .subscribe( ( packs: Pack[] ) => {
                this.packOptions = packs
                this.apply.detectChanges()
                console.log('PACKS:::::', JSON.stringify(packs))
            } )
    }

    enumToString ( index: number ): string {
        return PackType[index]
    }

    buy ( pack: Pack ) {
        this.packService.buyPack( pack )
            .catch( ( error: Response ) => {
                return Rx.Observable.of( error )
            } )
            .subscribe( ( response: Response ) => {
                const data = response.json()
                if ( response.status === 200 ) {
                    this.router.navigate( ['/openpack'] )
                } else {
                    console.log('ERROR::::', JSON.stringify( response ))
                }
            } )
    }
    
}