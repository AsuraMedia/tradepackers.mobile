"use strict";
var MenuOptionFactory = (function () {
    function MenuOptionFactory(id, title, display, icon, navigateTo, isEnabled) {
        if (isEnabled === void 0) { isEnabled = true; }
        this.id = id;
        this.title = title;
        this.display = display;
        this.icon = icon;
        this.navigateTo = navigateTo;
        this.isEnabled = isEnabled;
    }
    MenuOptionFactory.prototype.navigate = function (_router) {
        _router.navigate([this.navigateTo]);
    };
    return MenuOptionFactory;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MenuOptionFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5vcHRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUub3B0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBU0ksMkJBQWEsRUFBVSxFQUNWLEtBQWEsRUFDYixPQUFlLEVBQ2YsSUFBWSxFQUNaLFVBQWtCLEVBQ2xCLFNBQXlCO1FBQXpCLDBCQUFBLEVBQUEsZ0JBQXlCO1FBRWxDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUE7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7SUFFOUIsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBVSxPQUFnQjtRQUN0QixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQyJ9