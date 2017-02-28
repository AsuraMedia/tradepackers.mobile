import {Inject, Injectable, EventEmitter} from '@angular/core'
import {Http, Response, RequestOptionsArgs, Request, Headers} from '@angular/http'
import * as Rx from 'rxjs/Rx'
import { TeamDTO, BadgeDTO, RegionDTO } from '../../dtos'
import { Badge, Team } from '../../types'
import { urlConfig } from '../../util/urlConfig'
import * as LocalStorage from 'application-settings'
import { UserService } from '../../services/user.service'

@Injectable()
export class CreateTeamService {
    
    
    constructor ( private http : Http, private userService: UserService ) {
        
    }
    
    getBadges (): Promise<Badge[]> {
        return new Promise( ( resolve ) => {
            resolve([
                new Badge('b1', 'A', 'res://badgea', '0', { id: 1, name: 'OCCIDENTE' }, true),
                new Badge('b2', 'B', 'res://badgeb', '1', { id: 2, name: 'ORIENTE' }, false),
                new Badge('b3', 'C', 'res://badgec', '2', { id: 2, name: 'SUR' }, false)
            ])
        } )
    }

    getRegions (): Rx.Observable<Response> {

        const url = urlConfig.urlMap.get('regions')
        return this.http.get( url )

    }

    create ( team: Team ) : Rx.Observable<Response> {

        const token = this.userService.getOauthToken()
        const teamDto: TeamDTO = new TeamDTO( team )
        const userId = this.userService.getUserId()
        const url = urlConfig.getTeamUrl( userId )
        let headers = new Headers()
        headers.append( 'X-AUTH-TOKEN', token )
        console.log('TEAM JSON::::', JSON.stringify( teamDto ))
        return this.http.post( url, teamDto, { headers } )

    }
    
}