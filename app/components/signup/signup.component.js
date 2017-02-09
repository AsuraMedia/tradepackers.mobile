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
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var signup_factory_1 = require("../../components/signup/signup.factory");
var user_factory_1 = require("../../factories/user.factory");
var errors_1 = require("../../util/errors/errors");
var SignupComponent = (function () {
    function SignupComponent(_router, _page, _userFactory, _signupFactory) {
        this._router = _router;
        this._page = _page;
        this._userFactory = _userFactory;
        this._signupFactory = _signupFactory;
        this.isRegistering = false;
        this._page.actionBarHidden = true;
        this.errors = new errors_1.Errors();
        this.errors.clear();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.register = function () {
        var _this = this;
        this._userFactory.register()
            .subscribe(function (ok) {
            if (ok) {
                _this.isRegistering = false;
                _this._router.navigate(['/']);
            }
            else {
                var signup_1 = _this._page.getViewById('signup');
                signup_1.animate({
                    translate: { x: 5, y: 0 },
                    duration: 125,
                    iterations: 4
                })
                    .then(function () { signup_1.translateX = 0; });
            }
        });
    };
    SignupComponent.prototype.cancel = function () {
        var _this = this;
        this._page.animate({
            translate: { x: -this._page.getMeasuredHeight(), y: 0 },
            duration: 300
        })
            .then(function () { _this._router.navigate(['/']); });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'signup',
        templateUrl: './signup.template.html',
        styleUrls: ['./signup.css'],
        directives: [],
        providers: []
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        page_1.Page,
        user_factory_1.UserFactory,
        signup_factory_1.SignupFactory])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUE4RTtBQUM5RSwwQ0FBc0M7QUFDdEMsZ0NBQTRCO0FBRzVCLHlFQUFvRTtBQUNwRSw2REFBd0Q7QUFDeEQsbURBQStDO0FBWS9DLElBQWEsZUFBZTtJQUt4Qix5QkFBcUIsT0FBd0IsRUFDeEIsS0FBc0IsRUFDdEIsWUFBNkIsRUFDN0IsY0FBK0I7UUFIL0IsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQzdCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUw3QyxrQkFBYSxHQUFhLEtBQUssQ0FBQTtRQU9sQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUE7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFBO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVELGtDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQWtCQztRQWhCRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTthQUN2QixTQUFTLENBQUMsVUFBQyxFQUFZO1lBQ3BCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUE7Z0JBQzFCLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNoQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxRQUFNLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQzdDLFFBQU0sQ0FBQyxPQUFPLENBQUM7b0JBQ1gsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUN6QixRQUFRLEVBQUUsR0FBRztvQkFDYixVQUFVLEVBQUUsQ0FBQztpQkFDaEIsQ0FBQztxQkFDRCxJQUFJLENBQUMsY0FBUSxRQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUVWLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQUEsaUJBT0M7UUFMRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNYLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3ZELFFBQVEsRUFBRSxHQUFHO1NBQ2hCLENBQUM7YUFDRCxJQUFJLENBQUMsY0FBUSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDO0FBaERZLGVBQWU7SUFWM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztRQUMzQixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUM7SUFFRCxpQkFBVSxFQUFFO3FDQU04QixlQUFNO1FBQ04sV0FBSTtRQUNKLDBCQUFXO1FBQ1gsOEJBQWE7R0FSM0MsZUFBZSxDQWdEM0I7QUFoRFksMENBQWUifQ==