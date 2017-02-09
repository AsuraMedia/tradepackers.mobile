"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var router_2 = require("nativescript-angular/router");
var menu_option_service_1 = require("./menu.option.service");
var MenuOptionComponent = (function () {
    function MenuOptionComponent(_router, page) {
        this._router = _router;
        this.page = page;
    }
    MenuOptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._menuOptionService = new menu_option_service_1.default();
        this._menuOptionService.getOptions()
            .then(function (_menuOptions) {
            _this._menuOptions = _menuOptions;
        });
    };
    MenuOptionComponent.prototype.navigate = function (option) {
        option.navigate(this._router);
    };
    MenuOptionComponent.prototype.goToAvatar = function (id) {
        var avatar = this.page.getViewById(id);
        avatar.animate({
            scale: { x: 1.2, y: 1.2 },
            duration: 100,
            iterations: 2
        })
            .then(function () {
            avatar.animate({
                scale: { x: 1.0, y: 1.0 },
                duration: 50
            });
        });
    };
    return MenuOptionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MenuOptionComponent.prototype, "_menuOptions", void 0);
MenuOptionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'menu-options',
        templateUrl: './menu.option.template.html',
        styleUrls: ['../side-drawer/side.drawer.css'],
        providers: [menu_option_service_1.default],
        directives: [router_2.NS_ROUTER_DIRECTIVES]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], MenuOptionComponent);
exports.MenuOptionComponent = MenuOptionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5vcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVudS5vcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxnQ0FBNEI7QUFHNUIsMENBQXNDO0FBQ3RDLHNDQUFxRjtBQUNyRixzREFBZ0U7QUFDaEUsNkRBQXFEO0FBYXJELElBQWEsbUJBQW1CO0lBSzVCLDZCQUFxQixPQUFnQixFQUFVLElBQVc7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLFNBQUksR0FBSixJQUFJLENBQU87SUFFMUQsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFRQztRQU5HLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLDZCQUFpQixFQUFFLENBQUE7UUFFakQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRTthQUMvQixJQUFJLENBQUMsVUFBQyxZQUFtQztZQUN0QyxLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQTtRQUNwQyxDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFTyxzQ0FBUSxHQUFoQixVQUFrQixNQUEwQjtRQUN4QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRU0sd0NBQVUsR0FBakIsVUFBbUIsRUFBVztRQUUxQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNsQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ1gsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsVUFBVSxFQUFFLENBQUM7U0FDaEIsQ0FBQzthQUNHLElBQUksQ0FBQztZQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO2dCQUN6QixRQUFRLEVBQUUsRUFBRTthQUNmLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBRWQsQ0FBQztJQUVMLDBCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXJDWTtJQUFSLFlBQUssRUFBRTs7eURBQW9DO0FBSG5DLG1CQUFtQjtJQVYvQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7UUFDN0MsU0FBUyxFQUFHLENBQUMsNkJBQWlCLENBQUM7UUFDL0IsVUFBVSxFQUFFLENBQUMsNkJBQW9CLENBQUM7S0FDckMsQ0FBQztJQUVELGlCQUFVLEVBQUU7cUNBTXNCLGVBQU0sRUFBaUIsV0FBSTtHQUxqRCxtQkFBbUIsQ0F3Qy9CO0FBeENZLGtEQUFtQiJ9