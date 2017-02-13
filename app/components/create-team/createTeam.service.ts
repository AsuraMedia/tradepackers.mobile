import {Inject, Injectable, EventEmitter} from '@angular/core'
import {Http, Response} from '@angular/http'
import * as Rx from 'rxjs/Rx'

@Injectable()
export class CreateTeamService {
    
    
    constructor (private _http : Http) {
        
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
    
}

export class Badge {

    public id: string
    public name: string
    public imgUrl: string
    public col: string
    public isSelected: boolean = false

    constructor ( id, name, imgUrl, col ) {
        this.id = id,
        this.name = name,
        this.imgUrl = imgUrl
        this.col = col
    }

}