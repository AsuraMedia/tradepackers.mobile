import {Inject, Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {UserFactory} from '../../factories/user.factory'
import * as Rx from 'rxjs/Rx'

@Injectable()
export class LoginService {
    
    private baseUrl : string = 'http://192.168.56.1:9000'
    private url : string

    public webViewUrl
    
    constructor (private _http : Http) {
        console.log('LOGIN SERVICE NEW::::', this.webViewUrl)
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