import {Inject, Injectable, EventEmitter} from '@angular/core'
import {Http, Response, RequestOptionsArgs, Request, Headers} from '@angular/http'
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

    getRegions (): Rx.Observable<Response> {

        const url = urlConfig.urlMap.get('regions')
        return this.http.get( url )

    }

    create ( team: Team ) : Rx.Observable<Response> {

        const teamDto: TeamDTO = new TeamDTO( team )
        const userId = JSON.parse( LocalStorage.getString('oauth-token') ).userId
        const url = urlConfig.getTeamUrl( userId )
        let headers = new Headers()
        headers.append("content-type", "application/json")
        return this.http.post( url, teamDto, headers )

    }
    
}