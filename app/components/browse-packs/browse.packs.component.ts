import {Page} from 'ui/page'
import {Router} from '@angular/router'
import { Inject, Injectable, Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core'
import {SideDrawer} from '../../components/side-drawer/side.drawer.component'
import { Pack, PackType } from '../../types'
import { PackService } from '../../services/pack.service'
import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from 'ui/segmented-bar'

@Component({
    moduleId: module.id,
    selector: 'browse-packs',
    templateUrl: './browsePacks.template.html', 
    styleUrls: ['./browsePacks.css'],
    providers: [ PackService ],
    directives: [ SideDrawer ] 
})

export class BrowsePacksComponent implements OnInit {
    
    @ViewChild("tabs") tabs: ElementRef;

    public packTypes: any[]
    public packOptions: Pack[]
    public selectedPackType: number = PackType.PLUS

    constructor ( private _page : Page, public packService: PackService, private apply: ChangeDetectorRef ) {
        this._page.actionBarHidden = true
    }
    
    ngOnInit () {

        this.packTypes = [
            { title: PackType[PackType.BASIC] }, 
            { title: PackType[PackType.PLUS] }, 
            { title: PackType[PackType.PREMIUM] }
        ]
        
        this.getPackOptions()

        this.tabs.nativeElement.on( SegmentedBar.selectedIndexChangedEvent, (args: SelectedIndexChangedEventData) => {
            this.selectedPackType = args.newIndex
            this.getPackOptions()
        })
        
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
    
}