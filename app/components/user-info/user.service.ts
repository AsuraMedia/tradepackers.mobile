import {Inject, Injectable, Component, OnInit, ViewChild, Input} from '@angular/core'
import {UserFactory} from '../../factories/user.factory'

@Injectable()
export class UserService {
    
    constructor (public _userFactory : UserFactory) {
        
    }
    
    public getUser () : Promise<UserFactory> {
        
        return new Promise<UserFactory>((resolve, reject) => {
            
            let user = this.loggedIn()
            this._userFactory.id = user.id
            this._userFactory.email = user.email
            this._userFactory.firstName = user.firstName
            this._userFactory.lastName = user.lastName
            this._userFactory.userName = user.userName
            this._userFactory.avatar = user.avatar
            this._userFactory.coins = user.coins

            resolve(this._userFactory)
        })        
    }
    
    public loggedIn () : User {
        
        return {
            id: 0,
            email: '',
            password: '',
            passwordRepeat: '',
            firstName: '',
            lastName: '',
            userName: '',
            avatar: 'res://avatar2',
            coins: 0
        }
        
    }
}

interface User {
     id               : number
     email            : string
     password         : string
     passwordRepeat   : string
     firstName        : string
     lastName         : string
     userName         : string
     avatar           : string
     coins            : number
}