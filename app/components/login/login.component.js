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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var platform_1 = require("platform");
var login_service_1 = require("./login.service");
var user_factory_1 = require("../../factories/user.factory");
var nativeElements_1 = require("../../util/nativeElements");
var http_1 = require("@angular/http");
var frameModule = require('ui/frame');
var pageModule = require('ui/page');
var webViewModule = require("ui/web-view");
var web_view_1 = require("ui/web-view");
var Modal = require("nativescript-angular/modal-dialog");
var modal_component_1 = require("./modal.component");
var LocalStorage = require("application-settings");
var modalOptions = {
    fullscreen: false
};
var LoginComponent = (function () {
    function LoginComponent(_router, _page, _loginService, _userFactory, _http, modalService) {
        this._router = _router;
        this._page = _page;
        this._loginService = _loginService;
        this._userFactory = _userFactory;
        this._http = _http;
        this.modalService = modalService;
        this.baseUrl = 'http://tradepackers.asuramedia.com:9000/';
        this._page.actionBarHidden = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.heightDIPs = platform_1.screen.mainScreen.heightDIPs;
        this.widthDIPs = platform_1.screen.mainScreen.widthDIPs;
        var usernameView = this.usernameView.nativeElement;
        var passwordView = this.passwordView.nativeElement;
        nativeElements_1.setHintColor({ view: usernameView, color: new color_1.Color('#abaeb3') });
        nativeElements_1.setHintColor({ view: passwordView, color: new color_1.Color('#abaeb3') });
    };
    LoginComponent.prototype.showModal = function () {
        return this.modalService.showModal(modal_component_1.ListPicker, modalOptions);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._page.animate({
            translate: { x: -this._page.getMeasuredHeight(), y: 0 },
            duration: 300
        })
            .then(function () { _this._router.navigate(['/main']); });
    };
    LoginComponent.prototype.signup = function () {
        var _this = this;
        this._page.animate({
            translate: { x: this._page.getMeasuredHeight(), y: 0 },
            duration: 300
        })
            .then(function () { _this._router.navigate(['/signup']); });
    };
    LoginComponent.prototype.socialAuth = function (provider) {
        var _this = this;
        var social = this._page.getViewById(provider);
        social.animate({
            scale: { x: 1.2, y: 1.2 },
            duration: 100,
            iterations: 2
        })
            .then(function () {
            social.animate({
                scale: { x: 1.0, y: 1.0 },
                duration: 50
            });
        })
            .then(function () {
            _this.getSocialAuthUrl(provider)
                .subscribe(function (response) {
                console.log(response);
            });
        });
    };
    LoginComponent.prototype.getSocialAuthUrl = function (provider) {
        var _this = this;
        var redirectUrl = this.baseUrl + "social/" + provider;
        return this._http.get(redirectUrl)
            .catch(function (ex) {
            console.log('ERROR::::', ex);
            console.log(JSON.stringify(ex));
            return ex;
        })
            .map(function (result) {
            if (result.status === 200) {
                var data = result.json();
                _this._loginService.webViewUrl = decodeURIComponent(data.url);
                LocalStorage.setString('webView-url', decodeURIComponent(data.url));
                console.log('LOGIN SERVICE URL::::', _this._loginService.webViewUrl);
                _this.modalService.showModal(modal_component_1.ListPicker, modalOptions)
                    .then(function (res) {
                    console.log('MODAL::::', res);
                });
            }
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("usernameTxt"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "usernameView", void 0);
__decorate([
    core_1.ViewChild("passwordTxt"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "passwordView", void 0);
__decorate([
    core_1.ViewChild("oauthWebView"),
    __metadata("design:type", web_view_1.WebView)
], LoginComponent.prototype, "oauthWebView", void 0);
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: './login.template.html',
        styleUrls: ['./login.css'],
        directives: [Modal.ModalDialogHost],
        providers: [login_service_1.LoginService, Modal.ModalDialogService]
    }),
    __param(2, core_1.Inject(login_service_1.LoginService)),
    __metadata("design:paramtypes", [router_1.Router,
        page_1.Page,
        login_service_1.LoginService,
        user_factory_1.UserFactory,
        http_1.Http, Modal.ModalDialogService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEY7QUFDNUYsMENBQXNDO0FBQ3RDLGdDQUE4QjtBQUM5QiwrQkFBNkI7QUFFN0IscUNBQWlDO0FBRWpDLGlEQUE0QztBQUM1Qyw2REFBd0Q7QUFDeEQsNERBQXdEO0FBQ3hELHNDQUE0QztBQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMzQyx3Q0FBb0Q7QUFHcEQseURBQTBEO0FBQzFELHFEQUE4QztBQUM5QyxtREFBb0Q7QUFFcEQsSUFBTSxZQUFZLEdBQTZCO0lBQzNDLFVBQVUsRUFBRSxLQUFLO0NBQ3BCLENBQUE7QUFXRCxJQUFhLGNBQWM7SUFXM0Isd0JBQXFCLE9BQXVCLEVBQ3ZCLEtBQXFCLEVBQ0MsYUFBNkIsRUFDcEQsWUFBNkIsRUFDNUIsS0FBcUIsRUFDckIsWUFBeUM7UUFMekMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFDcEQsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGlCQUFZLEdBQVosWUFBWSxDQUE2QjtRQVBsRCxZQUFPLEdBQVksMENBQTBDLENBQUE7UUFTakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO0lBRXJDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUE7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUE7UUFDNUMsSUFBTSxZQUFZLEdBQWUsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUE7UUFDaEUsSUFBTSxZQUFZLEdBQWUsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUE7UUFDaEUsNkJBQVksQ0FBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUUsQ0FBQTtRQUNuRSw2QkFBWSxDQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBRSxDQUFBO0lBRXZFLENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFFLDRCQUFVLEVBQUUsWUFBWSxDQUFFLENBQUE7SUFDbEUsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFPQztRQUxPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1IsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDdkQsUUFBUSxFQUFFLEdBQUc7U0FDaEIsQ0FBQzthQUNBLElBQUksQ0FBQyxjQUFRLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBUUM7UUFORyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNYLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN0RCxRQUFRLEVBQUUsR0FBRztTQUNoQixDQUFDO2FBQ0QsSUFBSSxDQUFDLGNBQVEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFM0QsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBYSxRQUFnQjtRQUE3QixpQkFxQkM7UUFwQkcsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNYLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUUsR0FBRztZQUNiLFVBQVUsRUFBRSxDQUFDO1NBQ2hCLENBQUM7YUFDRyxJQUFJLENBQUM7WUFDRixNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtnQkFDekIsUUFBUSxFQUFFLEVBQUU7YUFDZixDQUFDLENBQUE7UUFDTixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUM7WUFFRixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO2lCQUMxQixTQUFTLENBQUMsVUFBQyxRQUFrQjtnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUN6QixDQUFDLENBQUMsQ0FBQTtRQUVWLENBQUMsQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUVNLHlDQUFnQixHQUF2QixVQUEwQixRQUFnQjtRQUExQyxpQkFzQ0M7UUFwQ0csSUFBTSxXQUFXLEdBQU0sSUFBSSxDQUFDLE9BQU8sZUFBVSxRQUFVLENBQUE7UUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLFdBQVcsQ0FBRTthQUMvQixLQUFLLENBQUUsVUFBQyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBRSxXQUFXLEVBQUUsRUFBRSxDQUFFLENBQUE7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDL0IsTUFBTSxDQUFDLEVBQUUsQ0FBQTtRQUNiLENBQUMsQ0FBRTthQUNGLEdBQUcsQ0FBRSxVQUFFLE1BQWdCO1lBQ3BCLEVBQUUsQ0FBQyxDQUFFLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBSSxDQUFDLENBQUMsQ0FBQztnQkFFMUIsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO2dCQUMxQixLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUE7Z0JBQzlELFlBQVksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFFLHVCQUF1QixFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFFLENBQUE7Z0JBRXJFLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFFLDRCQUFVLEVBQUUsWUFBWSxDQUFFO3FCQUNsRCxJQUFJLENBQUUsVUFBRSxHQUFHO29CQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUNqQyxDQUFDLENBQUUsQ0FBQTtZQWNYLENBQUM7UUFDTCxDQUFDLENBQUUsQ0FBQTtJQUdYLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFySEQsSUFxSEM7QUFoSCtCO0lBQTNCLGdCQUFTLENBQUMsYUFBYSxDQUFDOzhCQUEyQixpQkFBVTtvREFBQTtBQUNsQztJQUEzQixnQkFBUyxDQUFDLGFBQWEsQ0FBQzs4QkFBMkIsaUJBQVU7b0RBQUE7QUFDbEM7SUFBM0IsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7OEJBQTBCLGtCQUFPO29EQUFBO0FBUGxELGNBQWM7SUFUMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsT0FBTztRQUNqQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUMxQixVQUFVLEVBQUUsQ0FBRSxLQUFLLENBQUMsZUFBZSxDQUFFO1FBQ3JDLFNBQVMsRUFBRSxDQUFFLDRCQUFZLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFFO0tBQ3hELENBQUM7SUFlWSxXQUFBLGFBQU0sQ0FBQyw0QkFBWSxDQUFDLENBQUE7cUNBRkksZUFBTTtRQUNOLFdBQUk7UUFDa0IsNEJBQVk7UUFDbEMsMEJBQVc7UUFDWCxXQUFJLEVBQ0osS0FBSyxDQUFDLGtCQUFrQjtHQWhCakQsY0FBYyxDQXFIMUI7QUFySFksd0NBQWMifQ==