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
var errors_1 = require("../../util/errors/errors");
var SignupFactory = (function () {
    function SignupFactory() {
        this.errors = new errors_1.Errors();
    }
    SignupFactory.prototype.isValid = function (email, username, password, passwordRepeat) {
        this.errors.clear();
        this.errors.setForSignup();
        if (!this.validateEmail(email)) {
            this.errors.add('email');
        }
        if (!this.validateUsername(username)) {
            this.errors.add('username');
        }
        if (!this.validatePassword(password, passwordRepeat)) {
            this.errors.add('password');
        }
        return this.errors.list.length == 0;
    };
    SignupFactory.prototype.validateEmail = function (email) {
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    };
    SignupFactory.prototype.validateUsername = function (username) {
        return username && username.length >= 4;
    };
    SignupFactory.prototype.validatePassword = function (password, passwordRepeat) {
        return (password && passwordRepeat
            && password.length >= 6)
            && (password === passwordRepeat);
    };
    return SignupFactory;
}());
SignupFactory = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SignupFactory);
exports.SignupFactory = SignupFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWdudXAuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQW9FO0FBSXBFLG1EQUErQztBQUcvQyxJQUFhLGFBQWE7SUFJdEI7UUFGTyxXQUFNLEdBQVksSUFBSSxlQUFNLEVBQUUsQ0FBQTtJQUlyQyxDQUFDO0lBRU0sK0JBQU8sR0FBZCxVQUFnQixLQUFhLEVBQUUsUUFBZ0IsRUFDL0IsUUFBZ0IsRUFBRSxjQUFzQjtRQUVwRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUE7UUFFMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM1QixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQy9CLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQy9CLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQTtJQUV2QyxDQUFDO0lBRU8scUNBQWEsR0FBckIsVUFBdUIsS0FBYztRQUNqQyxJQUFNLEdBQUcsR0FBRyx3SkFBd0osQ0FBQTtRQUNwSyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBRU8sd0NBQWdCLEdBQXhCLFVBQTBCLFFBQWlCO1FBQ3ZDLE1BQU0sQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVPLHdDQUFnQixHQUF4QixVQUEwQixRQUFpQixFQUFFLGNBQXNCO1FBQy9ELE1BQU0sQ0FBQyxDQUFDLFFBQVEsSUFBSSxjQUFjO2VBQ25CLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO2VBQ2pCLENBQUMsUUFBUSxLQUFLLGNBQWMsQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFHTCxvQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUE5Q1ksYUFBYTtJQUR6QixpQkFBVSxFQUFFOztHQUNBLGFBQWEsQ0E4Q3pCO0FBOUNZLHNDQUFhIn0=