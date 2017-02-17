
class UrlConfig {

    private baseUrl: string = 'http://tradepackers.asuramedia.com:9000'
    public urlMap: Map<string, string> = new Map<string, string>()

    constructor () {
        this.urlMap.set( 'api', this.baseUrl )
        this.urlMap.set('oauth', `${this.baseUrl}/social`)
        this.urlMap.set('regions', `${this.baseUrl}/regions`)
    }

    public getUrl ( key: string ) {
        return this.urlMap.get( key )
    }

    public getTeamUrl ( userId: string ): string {
        return `${this.baseUrl}/users/${userId}/teams`
    }

}

export const urlConfig = new UrlConfig()