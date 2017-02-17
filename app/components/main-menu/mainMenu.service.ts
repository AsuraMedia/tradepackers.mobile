import {Inject, Injectable, EventEmitter} from '@angular/core'
import {Http, Response, RequestOptionsArgs, Request, Headers} from '@angular/http'
import * as Rx from 'rxjs/Rx'
import { TeamDTO, BadgeDTO, RegionDTO } from '../../dtos'
import { Badge, Team } from '../../types'
import { urlConfig } from '../../util/urlConfig'
import * as LocalStorage from 'application-settings'

@Injectable()
export class MainMenuService {
    
    
    constructor ( private http : Http ) {
        
    }
    
    getTeamInfo () : Rx.Observable<Response> {

        let headers = new Headers()
        headers.append("content-type", "application/json")
        const userId = JSON.parse( LocalStorage.getString('oauth-token') ).userId
        const url = urlConfig.getTeamUrl( userId )
        return this.http.get( url )
        
    }
    
}