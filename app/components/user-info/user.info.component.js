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
var core_1 = require("@angular/core");
var currency_pipe_1 = require("../../util/pipes/currency.pipe");
var user_service_1 = require("./user.service");
var user_factory_1 = require("../../factories/user.factory");
var UserInfoComponent = (function () {
    function UserInfoComponent(page, user, _userService) {
        this.page = page;
        this.user = user;
        this._userService = _userService;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUser()
            .then(function (_userFactory) {
            _this.user = _userFactory;
        });
    };
    UserInfoComponent.prototype.goToAvatar = function () {
        var avatar = this.page.getViewById('avatar');
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
    return UserInfoComponent;
}());
UserInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user-info',
        templateUrl: './user.info.template.html',
        styleUrls: ['./user.info.css'],
        providers: [],
        pipes: [currency_pipe_1.CoinsPipe]
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [page_1.Page,
        user_factory_1.UserFactory,
        user_service_1.UserService])
], UserInfoComponent);
exports.UserInfoComponent = UserInfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIuaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGdDQUE2QjtBQUc3QixzQ0FBcUY7QUFDckYsZ0VBQXdEO0FBQ3hELCtDQUEwQztBQUMxQyw2REFBd0Q7QUFZeEQsSUFBYSxpQkFBaUI7SUFFMUIsMkJBQXFCLElBQVcsRUFDWixJQUFrQixFQUNqQixZQUEwQjtRQUYxQixTQUFJLEdBQUosSUFBSSxDQUFPO1FBQ1osU0FBSSxHQUFKLElBQUksQ0FBYztRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUUvQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7YUFDdEIsSUFBSSxDQUFDLFVBQUMsWUFBMEI7WUFDN0IsS0FBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUE7UUFDNUIsQ0FBQyxDQUFDLENBQUE7SUFFVixDQUFDO0lBRU0sc0NBQVUsR0FBakI7UUFFSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN4QyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ1gsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsVUFBVSxFQUFFLENBQUM7U0FDaEIsQ0FBQzthQUNHLElBQUksQ0FBQztZQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO2dCQUN6QixRQUFRLEVBQUUsRUFBRTthQUNmLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBRWQsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSxpQkFBaUI7SUFWN0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQzlCLFNBQVMsRUFBRyxFQUFFO1FBQ2QsS0FBSyxFQUFFLENBQUMseUJBQVMsQ0FBQztLQUNyQixDQUFDO0lBRUQsaUJBQVUsRUFBRTtxQ0FHbUIsV0FBSTtRQUNMLDBCQUFXO1FBQ0YsMEJBQVc7R0FKdEMsaUJBQWlCLENBa0M3QjtBQWxDWSw4Q0FBaUIifQ==