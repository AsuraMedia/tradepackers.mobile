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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var page_1 = require('ui/page');
var color_1 = require('color');
var platform_1 = require("platform");
var login_service_1 = require('./login.service');
var user_factory_1 = require('../../factories/user.factory');
var nativeElements_1 = require('../../util/nativeElements');
var http_1 = require('@angular/http');
var frameModule = require('ui/frame');
var pageModule = require('ui/page');
var webViewModule = require("ui/web-view");
var web_view_1 = require('ui/web-view');
var utils = require('utils/utils');
var LoginComponent = (function () {
    function LoginComponent(_router, _page, _loginService, _userFactory, _http) {
        this._router = _router;
        this._page = _page;
        this._loginService = _loginService;
        this._userFactory = _userFactory;
        this._http = _http;
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
        var webView = new webViewModule.WebView();
        var http = this._http;
        var callback = function (args) {
            console.log("loadFinishedEvent called", args);
            var decodedUrl = args.url;
            if (args.url.indexOf('tradepackers.asuramedia.com') !== -1 &&
                args.url.indexOf('redirect_uri') === -1) {
                decodedUrl = decodedUrl.replace('#_=_', '');
                decodedUrl = _this.updateQueryStringParameter(decodedUrl, 'getToken', 'please');
                http.get(decodedUrl)
                    .catch(function (ex) {
                    return ex;
                })
                    .subscribe(function (result) {
                    var json = result.json();
                    if (result.status === 200) {
                        var token = json.Token;
                        console.log('TOKEN::::', token);
                        utils.openUrl('TradePackersMobile');
                    }
                });
            }
        };
        var redirectUrl = this.baseUrl + "social/" + provider;
        return this._http.get(redirectUrl)
            .catch(function (ex) {
            console.log(JSON.stringify(ex));
            return ex;
        })
            .map(function (result) {
            if (result.status === 200) {
                var data_1 = result.json();
                var factoryFunc = function () {
                    webView.url = decodeURIComponent(data_1.url);
                    webView.on(web_view_1.WebView.loadStartedEvent, callback);
                    var page = new pageModule.Page();
                    _this._page.content = webView;
                    return _this._page;
                };
                frameModule.topmost().navigate(factoryFunc);
            }
        });
    };
    LoginComponent.prototype.updateQueryStringParameter = function (uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
            return uri + separator + key + "=" + value;
        }
    };
    __decorate([
        core_1.ViewChild("usernameTxt"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "usernameView", void 0);
    __decorate([
        core_1.ViewChild("passwordTxt"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "passwordView", void 0);
    __decorate([
        core_1.ViewChild("oauthWebView"), 
        __metadata('design:type', web_view_1.WebView)
    ], LoginComponent.prototype, "oauthWebView", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: './login.template.html',
            styleUrls: ['./login.css'],
            directives: [],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page, login_service_1.LoginService, user_factory_1.UserFactory, http_1.Http])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkUsZUFDN0UsQ0FBQyxDQUQyRjtBQUM1Rix1QkFBcUIsaUJBQ3JCLENBQUMsQ0FEcUM7QUFDdEMscUJBQXFCLFNBQ3JCLENBQUMsQ0FENkI7QUFDOUIsc0JBQXNCLE9BQ3RCLENBQUMsQ0FENEI7QUFFN0IseUJBQXVCLFVBQ3ZCLENBQUMsQ0FEZ0M7QUFFakMsOEJBQTJCLGlCQUMzQixDQUFDLENBRDJDO0FBQzVDLDZCQUEwQiw4QkFDMUIsQ0FBQyxDQUR1RDtBQUN4RCwrQkFBNkIsMkJBQzdCLENBQUMsQ0FEdUQ7QUFDeEQscUJBQTZCLGVBQzdCLENBQUMsQ0FEMkM7QUFDNUMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwQyxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0MseUJBQXVDLGFBQ3ZDLENBQUMsQ0FEbUQ7QUFFcEQsSUFBWSxLQUFLLFdBQU0sYUFDdkIsQ0FBQyxDQURtQztBQVlwQztJQVdBLHdCQUFxQixPQUF1QixFQUN2QixLQUFxQixFQUNyQixhQUE2QixFQUM5QixZQUE2QixFQUM1QixLQUFxQjtRQUpyQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTjlCLFlBQU8sR0FBWSwwQ0FBMEMsQ0FBQTtRQVFqRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUE7SUFFckMsQ0FBQztJQUVE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