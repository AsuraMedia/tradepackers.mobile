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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var page_1 = require("ui/page");
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var Drawer = require("nativescript-telerik-ui/sidedrawer/angular");
var menu_option_component_1 = require("../menu-option/menu.option.component");
var user_info_component_1 = require('../user-info/user.info.component');
var SideDrawer = (function () {
    function SideDrawer(_router, _page, _menuOptionComponent, _userInfoComponent) {
        this._router = _router;
        this._page = _page;
        this._menuOptionComponent = _menuOptionComponent;
        this._userInfoComponent = _userInfoComponent;
        this._page.on("loaded", this.onLoaded, this);
    }
    SideDrawer.prototype.ngAfterViewInit = function () {
    };
    SideDrawer.prototype.ngOnInit = function () {
    };
    SideDrawer.prototype.onLoaded = function (args) {
        this.drawerComponent.drawerLocation = 'bottom';
        var circle = this._page.getViewById('circle-drawer');
        circle.animate({
            scale: { x: 2.5, y: 2.5 },
            duration: 100
        });
    };
    Object.defineProperty(SideDrawer.prototype, "currentNotification", {
        get: function () {
            return this._currentNotification;
        },
        enumerable: true,
        configurable: true
    });
    SideDrawer.prototype.openDrawer = function () {
        var _this = this;
        var circle = this._page.getViewById('circle-drawer');
        circle.animate({
            scale: { x: 0, y: 0 },
            duration: 150
        })
            .then(function () {
            _this.drawerComponent.sideDrawer.showDrawer();
        });
    };
    SideDrawer.prototype.onDrawerOpening = function () {
        console.log("Drawer opening");
        this._currentNotification = "Drawer opening";
    };
    SideDrawer.prototype.onDrawerOpened = function () {
        console.log("Drawer openedasdfsadf");
        this._currentNotification = "Drawer opened";
    };
    SideDrawer.prototype.onDrawerClosing = function () {
        console.log("Drawer closing");
        var circle = this._page.getViewById('circle-drawer');
        circle.animate({
            scale: { x: 2.5, y: 2.5 },
            duration: 125
        });
        this._currentNotification = "Drawer closing";
    };
    SideDrawer.prototype.onDrawerClosed = function () {
        console.log("Drawer closed");
        this._currentNotification = "Drawer closed";
    };
    __decorate([
        core_1.ViewChild(Drawer.RadSideDrawerComponent), 
        __metadata('design:type', Drawer.RadSideDrawerComponent)
    ], SideDrawer.prototype, "drawerComponent", void 0);
    SideDrawer = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'side-drawer',
            directives: [
                common_1.NgIf,
                menu_option_component_1.MenuOptionComponent,
                user_info_component_1.UserInfoComponent,
                router_1.ROUTER_DIRECTIVES
            ],
            templateUrl: './side.drawer.template.html',
            styleUrls: ['side.drawer.css'],
            providers: [menu_option_component_1.MenuOptionComponent, user_info_component_1.UserInfoComponent],
        }),
        __param(1, core_1.Inject(page_1.Page)),
        __param(2, core_1.Inject(menu_option_component_1.MenuOptionComponent)),
        __param(3, core_1.Inject(user_info_component_1.UserInfoComponent)), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page, menu_option_component_1.MenuOptionComponent, user_info_component_1.UserInfoComponent])
    ], SideDrawer);
    return SideDrawer;
}());
exports.SideDrawer = SideDrawer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS5kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lkZS5kcmF3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQkFBbUIsU0FDbkIsQ0FBQyxDQUQyQjtBQUc1QixxQkFBK0QsZUFDL0QsQ0FBQyxDQUQ2RTtBQUM5RSx1QkFBbUIsaUJBQ25CLENBQUMsQ0FEbUM7QUFDcEMsdUJBQXdDLGlCQUFpQixDQUFDLENBQUE7QUFDMUQsSUFBWSxNQUFNLFdBQU0sNENBQ3hCLENBQUMsQ0FEbUU7QUFHcEUsc0NBQWtDLHNDQUNsQyxDQUFDLENBRHVFO0FBQ3hFLG9DQUFnQyxrQ0FFaEMsQ0FBQyxDQUZpRTtBQWlCbEU7SUFJSSxvQkFDWSxPQUFnQixFQUNGLEtBQVcsRUFDSSxvQkFBMEMsRUFDNUMsa0JBQXNDO1FBSGpFLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDRixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ0kseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBRXpFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFLRCxvQ0FBZSxHQUFmO0lBRUEsQ0FBQztJQUVELDZCQUFRLEdBQVI7SUFFQSxDQUFDO0lBRU0sNkJBQVEsR0FBZixVQUFnQixJQUFJO1FBRWhCLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQTtRQUU5QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ1gsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFF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