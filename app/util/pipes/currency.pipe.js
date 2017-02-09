"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CoinsPipe = (function () {
    function CoinsPipe() {
    }
    CoinsPipe.prototype.transform = function (value, decimals) {
        return this.formatMoney(value, decimals);
    };
    CoinsPipe.prototype.formatMoney = function (n, c) {
        var n = n, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, t = t == undefined ? "," : t, s = "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") +
            i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
            (c ? d + Math.abs(n - parseInt(i)).toFixed(c).slice(2) : "");
    };
    return CoinsPipe;
}());
CoinsPipe = __decorate([
    core_1.Pipe({ name: 'coins', pure: false })
], CoinsPipe);
exports.CoinsPipe = CoinsPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1cnJlbmN5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQUFvRDtBQUdwRCxJQUFhLFNBQVM7SUFBdEI7SUFvQkEsQ0FBQztJQWxCRyw2QkFBUyxHQUFULFVBQVUsS0FBYSxFQUFFLFFBQWdCO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFhLENBQUMsRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNULENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNsQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUM1QixDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUM1QixDQUFDLEdBQUcsRUFBRSxFQUNOLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUNuRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDcEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLFNBQVM7SUFEckIsV0FBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7R0FDekIsU0FBUyxDQW9CckI7QUFwQlksOEJBQVMifQ==