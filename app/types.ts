import {Inject, Injectable} from '@angular/core'

export interface IMenuOption {
     id : number
     title : string
     display : string
     icon : string
     navigateTo : string
     isEnabled : boolean
}

@Injectable()
export class SignupDTO {
    
    constructor () {
        
    }
    
    public email          : string
    public username       : string
    public password       : string
    public passwordRepeat : string
    
}

export interface ErrorMessage {
    value : string
}

export interface OAuthInfo {
    userId: string
    token: string
    expirationDate: string
}

export class Region {
    public id: string
    public name: string

    constructor ( id, name ) {
        this.id = id
        this.name = name
    }
}

export class Team {

    public badge: Badge
    public name: string
    public abbreviation: string
    public dateCreated: string

    constructor () {
        this.badge = new Badge('', '', 'res://badgea', '', new Region('1','OCCIDENTE'), false )
    }

}

export class Badge {

    public id: string
    public name: string
    public region: Region
    public imgUrl: string
    public col: string
    public isSelected: boolean

    constructor ( id, name, imgUrl, col, region, isSelected ) {
        this.id = id,
        this.name = name,
        this.imgUrl = imgUrl
        this.col = col
        this.region = region
        this.isSelected = isSelected
    }

}
