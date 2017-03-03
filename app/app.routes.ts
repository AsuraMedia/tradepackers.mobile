import {RouterConfig} from '@angular/router'
import {nsProvideRouter} from 'nativescript-angular/router'
import {LoginComponent} from './components/login/login.component'
import {MainMenuComponent} from './components/main-menu/main.menu.component'
import {BrowsePacksComponent} from './components/browse-packs/browse.packs.component'
import {SignupComponent} from './components/signup/signup.component'
import { CreateTeamComponent } from './components/create-team/createTeam.component'
import { OpenPackComponent } from './components/open-pack/openPack.component'

export const routes: RouterConfig = [
  
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "main", component: MainMenuComponent },
  { path: "browsepacks", component: BrowsePacksComponent },
  { path: "createteam", component: CreateTeamComponent },
  { path: "openpack", component: OpenPackComponent }
  
]

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
]