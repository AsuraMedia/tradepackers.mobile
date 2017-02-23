import {Inject, Injectable, EventEmitter} from '@angular/core'
import { Http, Response, Request, RequestOptions, RequestMethod, Headers } from '@angular/http'
import * as Rx from 'rxjs/Rx'
import * as LocalStorage from 'application-settings'
import { urlConfig } from '../util/urlConfig'
import { Team } from '../types'
import { UserService } from '../services/user.service'

@Injectable()
export class TeamService {
    
    constructor ( private http : Http, private userService: UserService ) {
        
    }

    getTeam (): Rx.Observable<Response> {
        const token = this.userService.getOauthToken()
        const userId = this.userService.getUserId()
        const url = urlConfig.getTeamUrl( userId )
        let headers = new Headers()
        headers.append( 'X-AUTH-TOKEN', token )
        console.log('URL::::::', url)
        console.log('HEADERS::::::', JSON.stringify(headers))
        return this.http.get( url, { headers } )
    }
    
    
}