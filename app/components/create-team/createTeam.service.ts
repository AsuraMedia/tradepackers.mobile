import {Inject, Injectable, EventEmitter} from '@angular/core'
import {Http, Response} from '@angular/http'
import * as Rx from 'rxjs/Rx'
import { TeamDTO, BadgeDTO, RegionDTO } from '../../dtos'
import { Badge, Team } from '../../types'
import { urlConfig } from '../../util/urlConfig'
import * as LocalStorage from 'application-settings'

@Injectable()
export class CreateTeamService {
    
    
    constructor (private http : Http) {
        
    }
    
    getBadges (): Promise<Badge[]> {
        return new Promise( ( resolve ) => {
            resolve([
                new Badge('b1', 'A', 'res://badgea', '0', {}, true),
                new Badge('b2', 'B', 'res://badgeb', '1', {}, false),
                new Badge('b3', 'C', 'res://badgec', '2', {}, false)
            ])
        } )
    }

    create ( team: Team ) : Rx.Observable<Response> {

        const teamDto: TeamDTO = new TeamDTO( team )
        const userId = JSON.parse( LocalStorage.getString('oauth-token') ).userId
        return this.http.post( urlConfig.getTeamUrl( userId ), teamDto )

    }
    
}