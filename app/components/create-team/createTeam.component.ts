import { Component, ElementRef, OnInit, ViewChild, NgZone, Inject } from "@angular/core";
import {ModalDialogParams} from "nativescript-angular/modal-dialog";
import {Page} from "ui/page";
import { EventsService } from '../../util/event.service'
import * as Modal from "nativescript-angular/modal-dialog"
import { CreateTeamService } from './createTeam.service'
import { TextField } from 'ui/text-field'
import { setHintColor } from '../../util/nativeElements'
import { Color } from 'color'
import { LoadingModalComponent } from '../loading-modal/loadingModal.component'
import { Team, Badge } from '../../types'
import { Http, Response } from '@angular/http'
import { Router } from "@angular/router"
import * as _ from 'lodash'
import * as Rx from 'rxjs/Rx'

let page: Page, x: number

@Component({
  moduleId: module.id,
  selector: "create-team",
  templateUrl: './createteam.template.html', 
  styleUrls: ['./createTeam.css'],
  directives: [ Modal.ModalDialogHost ],
  providers: [ EventsService, Modal.ModalDialogService, CreateTeamService ]
})

export class CreateTeamComponent implements OnInit {

    public _: any = _
    public team: Team = new Team()
    public badges: Badge[]
    @ViewChild("teamNameTxt")   public teamNameTxt   : ElementRef
    @ViewChild("abrTxt")        public abrTxt        : ElementRef

    constructor (   private page: Page, 
                    private router: Router,
                    public eventsService: EventsService,
                    public createTeamService: CreateTeamService,
                    private modalService: Modal.ModalDialogService ) {

        page                       = this.page
        this.page.actionBarHidden  = true
        this.page.on("loaded", this.onLoaded, this)
        LoadingModalComponent.registerListeners( this.eventsService )

    }

    ngOnInit () {

        this.createTeamService.getBadges()
            .then( ( result: Badge[] ) => {
                this.badges = result
            } )
    }

    public onLoaded(args) {
        
        const teamNameTxt = <TextField> this.teamNameTxt.nativeElement
        const abrTxt = <TextField> this.abrTxt.nativeElement
        setHintColor( { view: teamNameTxt, color: new Color('#9f9f9f') } )
        setHintColor( { view: abrTxt, color: new Color('#9f9f9f') } )

    }

    selectBadge ( badge: Badge ): void {

        let badgeEl = this.page.getViewById( badge.id )
            badgeEl.animate({
                scale: { x: 1.2, y: 1.2 },
                duration: 100
            })

        this.badges.forEach( ( badge:Badge ) => {
            if ( badge.isSelected ) {
                badge.isSelected = false
                badgeEl = this.page.getViewById( badge.id )
                badgeEl.animate({
                    scale: { x: 1.0, y: 1.0 },
                    duration: 100
                })
            }
        } )
        badge.isSelected = true
        this.team.badge = badge
    }

    continue (): void {

        LoadingModalComponent.showModal( this.modalService )
        this.createTeamService.create( this.team )
            .catch( ( error: any, caught: Rx.Observable<{}> ) => {
                console.log( 'ERROR:::', error + ' ' + caught )
                return Rx.Observable.of( error )
            } )
            .subscribe( ( response: Response ) => {
                if ( response.status === 200 ) {
                    this.eventsService.broadcast( 'loadingModalEvent', 'close' )
                    this.router.navigate(['/main'])
                }
            } )
    }

}