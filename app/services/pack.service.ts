import {Inject, Injectable, EventEmitter} from '@angular/core'
import { Http, Response, Request, RequestOptions, RequestMethod, Headers } from '@angular/http'
import * as Rx from 'rxjs/Rx'
import * as LocalStorage from 'application-settings'
import { urlConfig } from '../util/urlConfig'
import { Pack, PackType } from '../types'
import { UserService } from '../services/user.service'

@Injectable()
export class PackService {

    public currentPack: Pack
    
    constructor ( private http : Http, private userService: UserService ) {
        
    }

    public getPackOptions ( packType: PackType ) : Rx.Observable<Pack[]> {

        let packs: Pack[] = [
            new Pack('1', 'res://silver7pack', PackType.BASIC, 7, 'contiene 7 tarjetas en total, almenos 3 raras, entre jugadores y articulos.', 
                150, []),
            new Pack('2', 'res://silver11pack', PackType.BASIC, 7, 'contiene 11 tarjetas en total, almenos 5 raras, entre jugadores y articulos.', 
                250, []),
            new Pack('3', 'res://gold7pack', PackType.PLUS, 7, 'contiene 7 tarjetas en total, almenos 3 raras, entre jugadores y articulos.', 
                350, []),
            new Pack('4', 'res://gold11pack', PackType.PLUS, 11, 'contiene 11 tarjetas en total, almenos 5 raras, entre jugadores y articulos.', 
                750, []),
            new Pack('5', 'res://gold11pack', PackType.PLUS, 24, 'contiene 24 tarjetas en total, almenos 9 raras, entre jugadores y articulos.', 
                1000, [])
        ]

        return Rx.Observable.of( packs.filter( ( pack: Pack ) => { 
                return pack.type === packType 
            } ) 
        )

    }

    public buyPack ( pack: Pack ) : Rx.Observable<Response> {

        const iterator = Math.random() * 100
        let players: number [] = []

        for( var i = 0; i < iterator; i++ ) {
            players.push(i)
        }

        this.currentPack = pack
        this.currentPack.cards = players
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    }
    
    
}