"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var app_routes_1 = require("./app.routes");
var app_component_1 = require('./app.component');
core_1.enableProdMode();
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    angular_1.SIDEDRAWER_PROVIDERS,
    app_routes_1.APP_ROUTER_PROVIDERS
], { startPageActionBarHidden: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBHQUEwRztBQUMxRyw0QkFBb0Msa0NBQ3BDLENBQUMsQ0FEcUU7QUFDdEUsd0JBQW1DLDRDQUNuQyxDQUFDLENBRDhFO0FBQy9FLHFCQUE2QixlQUM3QixDQUFDLENBRDJDO0FBQzVDLHFCQUE2QixlQUM3QixDQUFDLENBRDJDO0FBRTVDLDJCQUFtQyxjQUNuQyxDQUFDLENBRGdEO0FBQ2pELDhCQUEyQixpQkFFM0IsQ0FBQyxDQUYyQztBQUU1QyxxQkFBYyxFQUFFLENBQUE7QUFFaEIsbUNBQXFCLENBQUMsNEJBQVksRUFBRTtJQUNoQyxxQkFBYztJQUNkLDhCQUFvQjtJQUNwQixpQ0FBb0I7Q0FFdkIsRUFBRSxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSxDQUFDLENBQUEifQ==