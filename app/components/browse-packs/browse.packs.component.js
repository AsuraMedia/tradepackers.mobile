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
var side_drawer_component_1 = require("../../components/side-drawer/side.drawer.component");
var BrowsePacksComponent = (function () {
    function BrowsePacksComponent(_page) {
        this._page = _page;
        this._page.actionBarHidden = true;
    }
    BrowsePacksComponent.prototype.ngOnInit = function () {
    };
    return BrowsePacksComponent;
}());
BrowsePacksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'browse-packs',
        template: "<side-drawer>\n                <StackLayout style=\"width:100%;height:80%;\">\n                    <label text=\"Lets browse some packs!\" \n                            horizontalAlignment=\"center\" \n                            style=\"color:snow\">\n                    </label>\n                </StackLayout>\n            </side-drawer>",
        styleUrls: [],
        directives: [side_drawer_component_1.SideDrawer]
    }),
    __metadata("design:paramtypes", [page_1.Page])
], BrowsePacksComponent);
exports.BrowsePacksComponent = BrowsePacksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLnBhY2tzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5wYWNrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGdDQUE0QjtBQUU1QixzQ0FBOEU7QUFDOUUsNEZBQTZFO0FBa0I3RSxJQUFhLG9CQUFvQjtJQUk3Qiw4QkFBcUIsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO0lBQ3JDLENBQUM7SUFFRCx1Q0FBUSxHQUFSO0lBR0EsQ0FBQztJQUVMLDJCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxvQkFBb0I7SUFoQmhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUNKLHVWQU9tQjtRQUN2QixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxDQUFDLGtDQUFVLENBQUM7S0FDM0IsQ0FBQztxQ0FNK0IsV0FBSTtHQUp4QixvQkFBb0IsQ0FhaEM7QUFiWSxvREFBb0IifQ==