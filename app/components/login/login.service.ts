import {Inject, Injectable, EventEmitter} from '@angular/core'
import {Http, Response} from '@angular/http'
import {UserFactory} from '../../factories/user.factory'
import * as Rx from 'rxjs/Rx'
import * as LocalStorage from 'application-settings'
import * as Moment from 'moment'
import { OAuthInfo } from '../../types'

@Injectable()
export class LoginService {
    
    private baseUrl : string = 'http://192.168.56.1:9000'
    private url : string
    
    constructor (private _http : Http) {
        
    }

    isAuthenticated () : boolean {
        
        let oauthInfo: OAuthInfo
        if ( LocalStorage.getString('oauth-token') ) {
            const oauthInfo: OAuthInfo =  JSON.parse( LocalStorage.getString('oauth-token') )
            const now = new Date()
            const diff = Moment( new Date( oauthInfo.expirationDate ) ).diff( Moment( now ), 'days' )
            return diff === 0
        } else {
            return false
        }

    }
    
    authenticate (dto : UserFactory) : Rx.Observable<{}> {
        
        let loginDTO = {
            email: dto.email,
            password: dto.password
        }
        
        this.url = this.baseUrl + '/login'
        return this._http.post(this.url, loginDTO)
        
    }
    
}