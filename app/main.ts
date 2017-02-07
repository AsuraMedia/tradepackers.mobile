// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application"
import {SIDEDRAWER_PROVIDERS} from "nativescript-telerik-ui/sidedrawer/angular"
import { enableProdMode } from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {nsProvideRouter} from 'nativescript-angular/router'
import {APP_ROUTER_PROVIDERS} from "./app.routes"
import {AppComponent} from './app.component'
import { ModalDialogService } from 'nativescript-angular/modal-dialog'

enableProdMode()

nativeScriptBootstrap(AppComponent, [
    HTTP_PROVIDERS,
    SIDEDRAWER_PROVIDERS,
    APP_ROUTER_PROVIDERS
    
], { startPageActionBarHidden: true })