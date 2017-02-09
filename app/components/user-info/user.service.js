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
var core_1 = require("@angular/core");
var user_factory_1 = require("../../factories/user.factory");
var UserService = (function () {
    function UserService(_userFactory) {
        this._userFactory = _userFactory;
    }
    UserService.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var user = _this.loggedIn();
            _this._userFactory.id = user.id;
            _this._userFactory.email = user.email;
            _this._userFactory.firstName = user.firstName;
            _this._userFactory.lastName = user.lastName;
            _this._userFactory.userName = user.userName;
            _this._userFactory.avatar = user.avatar;
            _this._userFactory.coins = user.coins;
            resolve(_this._userFactory);
        });
    };
    UserService.prototype.loggedIn = function () {
        return {
            id: 10,
            email: 'odiaz.dw@gmail.com',
            password: '',
            passwordRepeat: '',
            firstName: 'Oscar',
            lastName: 'Diaz',
            userName: 'think blue',
            avatar: 'res://avatar2',
            coins: 500000
        };
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_factory_1.UserFactory])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUY7QUFDckYsNkRBQXdEO0FBR3hELElBQWEsV0FBVztJQUVwQixxQkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFFOUMsQ0FBQztJQUVNLDZCQUFPLEdBQWQ7UUFBQSxpQkFlQztRQWJHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBYyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBRTVDLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUMxQixLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFBO1lBQzlCLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7WUFDcEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQTtZQUM1QyxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO1lBQzFDLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUE7WUFDMUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtZQUN0QyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1lBRXBDLE9BQU8sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sOEJBQVEsR0FBZjtRQUVJLE1BQU0sQ0FBQztZQUNILEVBQUUsRUFBRSxFQUFFO1lBQ04sS0FBSyxFQUFFLG9CQUFvQjtZQUMzQixRQUFRLEVBQUUsRUFBRTtZQUNaLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRSxlQUFlO1lBQ3ZCLEtBQUssRUFBRSxNQUFNO1NBQ2hCLENBQUE7SUFFTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDO0FBdENZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FHMEIsMEJBQVc7R0FGckMsV0FBVyxDQXNDdkI7QUF0Q1ksa0NBQVcifQ==