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
        nativeElements_1.setHintColor({ view: usernameView, color: new color_1.Color('#fff') });
        nativeElements_1.setHintColor({ view: passwordView, color: new color_1.Color('#fff') });
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
            return ex;
        })
            .map(function (result) {
            if (result.status === 200) {
                var data = result.json();
                _this._loginService.webViewUrl = decodeURIComponent(data.url);
                LocalStorage.setString('webView-url', decodeURIComponent(data.url));
                _this.modalService.showModal(modal_component_1.SocialOauthModal, modalOptions)
                    .then(function (res) {
                    _this._router.navigate(['/main']);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNEY7QUFDNUYsMENBQXNDO0FBQ3RDLGdDQUE4QjtBQUM5QiwrQkFBNkI7QUFFN0IscUNBQWlDO0FBRWpDLGlEQUE0QztBQUM1Qyw2REFBd0Q7QUFDeEQsNERBQXdEO0FBQ3hELHNDQUE0QztBQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMzQyx3Q0FBb0Q7QUFHcEQseURBQTBEO0FBQzFELHFEQUFvRDtBQUNwRCxtREFBb0Q7QUFFcEQsSUFBTSxZQUFZLEdBQTZCO0lBQzNDLFVBQVUsRUFBRSxLQUFLO0NBQ3BCLENBQUE7QUFXRCxJQUFhLGNBQWM7SUFXM0Isd0JBQXFCLE9BQXVCLEVBQ3ZCLEtBQXFCLEVBQ0MsYUFBNkIsRUFDcEQsWUFBNkIsRUFDNUIsS0FBcUIsRUFDckIsWUFBeUM7UUFMekMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFDcEQsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGlCQUFZLEdBQVosWUFBWSxDQUE2QjtRQVBsRCxZQUFPLEdBQVksMENBQTBDLENBQUE7UUFTakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO0lBRXJDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUE7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