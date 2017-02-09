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
var http_1 = require("@angular/http");
var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
        this.baseUrl = 'http://192.168.56.1:9000';
    }
    LoginService.prototype.authenticate = function (dto) {
        var loginDTO = {
            email: dto.email,
            password: dto.password
        };
        this.url = this.baseUrl + '/login';
        return this._http.post(this.url, loginDTO);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFnRDtBQUNoRCxzQ0FBNEM7QUFLNUMsSUFBYSxZQUFZO0lBT3JCLHNCQUFxQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztRQUx6QixZQUFPLEdBQVksMEJBQTBCLENBQUE7SUFPckQsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYyxHQUFpQjtRQUUzQixJQUFJLFFBQVEsR0FBRztZQUNYLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztZQUNoQixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7U0FDekIsQ0FBQTtRQUVELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUE7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFFOUMsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxZQUFZO0lBRHhCLGlCQUFVLEVBQUU7cUNBUW9CLFdBQUk7R0FQeEIsWUFBWSxDQXVCeEI7QUF2Qlksb0NBQVkifQ==