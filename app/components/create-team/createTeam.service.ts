import {Inject, Injectable, EventEmitter} from '@angular/core'
import {Http, Response} from '@angular/http'
import * as Rx from 'rxjs/Rx'
import { Badge, Team } from '../../types'

@Injectable()
export class CreateTeamService {
    
    
    constructor (private http : Http) {
        
    }
    
    getBadges (): Promise<Badge[]> {
        return new Promise( ( resolve ) => {
            resolve([
                new Badge('b1', 'A', 'res://badgea', '0'),
                new Badge('b2', 'B', 'res://badgeb', '1'),
                new Badge('b3', 'C', 'res://badgec', '2')
            ])
        } )
    }

    create ( team: Team ) : Rx.Observable<Response> {
        return this.http.post('', team)
    }
    
}