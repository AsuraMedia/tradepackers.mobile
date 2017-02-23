import {Inject, Injectable, EventEmitter} from '@angular/core'
import {Http, Response} from '@angular/http'
import * as Rx from 'rxjs/Rx'
import * as LocalStorage from 'application-settings'

@Injectable()
export class UserService {
    
    constructor ( private http : Http ) {
        
    }

    getUserId (): string {
        const oauthToken = JSON.parse(LocalStorage.getString('oauth-token'))
        const userId = oauthToken.userId
        return userId
    }
    
    getOauthToken (): string {
        const oauthToken = JSON.parse(LocalStorage.getString('oauth-token'))
        const token = oauthToken.token
        return token
    }
    
}

