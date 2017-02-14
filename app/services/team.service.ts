import {Inject, Injectable, EventEmitter} from '@angular/core'
import {Http, Response} from '@angular/http'
import * as Rx from 'rxjs/Rx'
import * as LocalStorage from 'application-settings'
import { urlConfig } from '../util/urlConfig'
import { Team } from '../types'

@Injectable()
export class TeamService {
    
    constructor ( private http : Http ) {
        
    }

    getTeamInfo (): Rx.Observable<Response> {
        return this.http.get( urlConfig.getUrl('teamInfo') )
    }
    
    
}