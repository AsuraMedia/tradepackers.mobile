"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var types_1 = require("./types");
var signup_service_1 = require("../app/components/signup/signup.service");
var signup_factory_1 = require("../app/components/signup/signup.factory");
var user_factory_1 = require("../app/factories/user.factory");
var user_service_1 = require("../app/components/user-info/user.service");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "app",
        directives: [router_1.NS_ROUTER_DIRECTIVES],
        template: "<page-router-outlet></page-router-outlet>",
        providers: [types_1.SignupDTO, signup_service_1.SignupService, signup_factory_1.SignupFactory, user_factory_1.UserFactory, user_service_1.UserService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQUF3QztBQUN4QyxzREFBaUU7QUFDakUsaUNBQWlDO0FBQ2pDLDBFQUFxRTtBQUNyRSwwRUFBcUU7QUFDckUsOERBQXlEO0FBQ3pELHlFQUFvRTtBQVNwRSxJQUFhLFlBQVk7SUFBekI7SUFBMkIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUE1QixJQUE0QjtBQUFmLFlBQVk7SUFQeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxLQUFLO1FBQ2YsVUFBVSxFQUFFLENBQUMsNkJBQW9CLENBQUM7UUFDbEMsUUFBUSxFQUFFLDJDQUEyQztRQUNyRCxTQUFTLEVBQUUsQ0FBQyxpQkFBUyxFQUFFLDhCQUFhLEVBQUUsOEJBQWEsRUFBRSwwQkFBVyxFQUFFLDBCQUFXLENBQUM7S0FDL0UsQ0FBQztHQUVXLFlBQVksQ0FBRztBQUFmLG9DQUFZIn0=