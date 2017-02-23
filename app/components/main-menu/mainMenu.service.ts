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
    
    
}