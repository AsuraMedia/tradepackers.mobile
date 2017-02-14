import * as Types from './types'

export class TokenDTO {
    public expirationDate: string
    public token: string
    public userId: string
    
    constructor ( json: any ) {
        this.expirationDate = json.expirationDate
        this.token = json.token
        this.userId = json.userId
    }
}

export class TeamDTO {
  public id: string
  public name: string
  public abbreviation: string
  public badge: BadgeDTO

  constructor ( team: Types.Team ) {
    this.name = team.name
    this.abbreviation = team.abbreviation
    this.badge = new BadgeDTO( team.badge )
  }

}

export class BadgeDTO {
  public  id: string
  public  region: RegionDTO
  public  imgUrl: string

  constructor ( badge: Types.Badge ) {
    this.id = badge.id
    this.imgUrl = badge.imgUrl
    this.region = new RegionDTO( badge.region )
  }

}

export class RegionDTO {
  public  id: string
  public  name: string

  constructor ( region: Types.Region ) {
    this.id = region.id
    this.name = region.name
  }
}