"use strict";
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./components/login/login.component");
var main_menu_component_1 = require("./components/main-menu/main.menu.component");
var browse_packs_component_1 = require("./components/browse-packs/browse.packs.component");
var signup_component_1 = require("./components/signup/signup.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "signup", component: signup_component_1.SignupComponent },
    { path: "main", component: main_menu_component_1.MainMenuComponent },
    { path: "browsepacks", component: browse_packs_component_1.BrowsePacksComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(exports.routes, {})
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHNEQUEyRDtBQUMzRCxzRUFBaUU7QUFDakUsa0ZBQTRFO0FBQzVFLDJGQUFxRjtBQUNyRix5RUFBb0U7QUFFdkQsUUFBQSxNQUFNLEdBQWlCO0lBRWxDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUN2QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7SUFDOUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFO0NBRXpELENBQUE7QUFFWSxRQUFBLG9CQUFvQixHQUFHO0lBQ2xDLHdCQUFlLENBQUMsY0FBTSxFQUFFLEVBQUUsQ0FBQztDQUM1QixDQUFBIn0=