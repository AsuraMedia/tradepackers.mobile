
import {SignupDTO} from '../../types'

export class Errors {
    
    private collection  : Map<string, string> = new Map<string, string>()
    public list         : Array<string>       = new Array<string>()

    constructor () {

    }

    public clear () : void {

        if (this.collection.size > 0) {
            this.collection.clear()
        }
        if (this.list.length > 0) {
            this.list = new Array<string>()
        }

    }

    public setForSignup () : void {

    let signupDto : SignupDTO = new SignupDTO()

        this.collection.set('email', 'Correo electronico invalido.')
        this.collection.set('password', 'Contraseña almenos de 6 caracteres.')
        this.collection.set('passwordRepeat', "Constraseña no coincide.")
        this.collection.set('username', 'Usuario debe tener almenos 4 caracteres.')

    }

    public add (key : string) : void {
        let message = this.collection.get(key)
        this.list.push(message)
    }
}