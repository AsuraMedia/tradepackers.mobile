import {Page} from 'ui/page'
import {Router} from '@angular/router'
import {Inject, Injectable, Component, OnInit, ViewChild} from '@angular/core'
import {SideDrawer} from '../../components/side-drawer/side.drawer.component'
import { Pack, PackType } from '../../types'
import { PackService } from '../../services/pack.service'

@Component({
    moduleId: module.id,
    selector: 'browse-packs',
    templateUrl: './browsePacks.template.html', 
    styleUrls: ['./browsePacks.css'],
    providers: [ PackService ],
    directives: [ SideDrawer ] 
})

export class BrowsePacksComponent implements OnInit {
    
    public packOptions: Pack[]
    public selectedPackType: string = PackType[PackType.PLUS]

    constructor ( private _page : Page, public packService: PackService ) {
        this._page.actionBarHidden = true
    }
    
    ngOnInit () {
        
        this.packService.getPackOptions( PackType[this.selectedPackType] )
            .subscribe( ( packs: Pack[] ) => {
                this.packOptions = packs
                console.log('PACKS:::::', JSON.stringify(packs))
            } )
        
    }

    enumToString ( index: number ): string {
        return PackType[index]
    }
    
}