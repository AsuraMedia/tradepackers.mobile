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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var SignupService = (function () {
    function SignupService(_http) {
        this._http = _http;
        this.baseUrl = 'http://192.168.56.1:9000';
    }
    SignupService.prototype.signup = function (dto) {
        this.url = this.baseUrl + '/signup';
        return this._http.post(this.url, dto).map(function (response) {
            return response;
        });
    };
    return SignupService;
}());
SignupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SignupService);
exports.SignupService = SignupService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWdudXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsc0NBQTRDO0FBQzVDLHNDQUFnRDtBQUdoRCxJQUFhLGFBQWE7SUFLdEIsdUJBQXFCLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBSHpCLFlBQU8sR0FBWSwwQkFBMEIsQ0FBQTtJQUtyRCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFRLEdBQWU7UUFFbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQTtRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFtQjtZQUM5QyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQ25CLENBQUMsQ0FBQyxDQUFBO0lBQ2xCLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQU1vQixXQUFJO0dBTHhCLGFBQWEsQ0FpQnpCO0FBakJZLHNDQUFhIn0=