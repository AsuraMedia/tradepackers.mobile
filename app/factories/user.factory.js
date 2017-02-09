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
var Rx = require("rxjs/Rx");
var core_1 = require("@angular/core");
var signup_service_1 = require("../components/signup/signup.service");
var types_1 = require("../types");
var signup_factory_1 = require("../components/signup/signup.factory");
var UserFactory = (function () {
    function UserFactory(_signupService, _signupFactory) {
        this._signupService = _signupService;
        this._signupFactory = _signupFactory;
    }
    UserFactory.prototype.register = function () {
        if (this._signupFactory
            .isValid(this.email, this.userName, this.password, this.passwordRepeat)) {
            var dto = new types_1.SignupDTO();
            dto.email = this.email;
            dto.username = this.userName;
            dto.password = this.password;
            return this._signupService.signup(dto)
                .map(function (response) {
                return response.status === 200;
            });
        }
        else {
            return Rx.Observable.create(function (observer) {
                observer.next(false);
                observer.complete();
            });
        }
    };
    return UserFactory;
}());
UserFactory = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [signup_service_1.SignupService,
        signup_factory_1.SignupFactory])
], UserFactory);
exports.UserFactory = UserFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw0QkFBNkI7QUFDN0Isc0NBQWdEO0FBQ2hELHNFQUFpRTtBQUNqRSxrQ0FBa0M7QUFDbEMsc0VBQWlFO0FBR2pFLElBQWEsV0FBVztJQWFwQixxQkFBcUIsY0FBK0IsRUFDL0IsY0FBK0I7UUFEL0IsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtJQUVwRCxDQUFDO0lBRU0sOEJBQVEsR0FBZjtRQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjO2FBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFOUUsSUFBSSxHQUFHLEdBQWUsSUFBSSxpQkFBUyxFQUFFLENBQUE7WUFDakMsR0FBRyxDQUFDLEtBQUssR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFBO1lBQzVCLEdBQUcsQ0FBQyxRQUFRLEdBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQTtZQUMvQixHQUFHLENBQUMsUUFBUSxHQUFNLElBQUksQ0FBQyxRQUFRLENBQUE7WUFFbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDekIsR0FBRyxDQUFDLFVBQUMsUUFBbUI7Z0JBQ3JCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQTtZQUNsQyxDQUFDLENBQUMsQ0FBQTtRQUVsQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUErQjtnQkFDdkQsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQ3ZCLENBQUMsQ0FBQyxDQUFBO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFHTCxrQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQWM4Qiw4QkFBYTtRQUNiLDhCQUFhO0dBZDNDLFdBQVcsQ0EwQ3ZCO0FBMUNZLGtDQUFXIn0=