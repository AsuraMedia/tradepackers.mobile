"use strict";
var menu_option_factory_1 = require("./menu.option.factory");
var MenuOptionService = (function () {
    function MenuOptionService() {
    }
    MenuOptionService.prototype.getOptions = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._menuOptions = _this.options().map(function (_menuOption) {
                return new menu_option_factory_1.default(_menuOption.id, _menuOption.title, _menuOption.display, _menuOption.icon, _menuOption.navigateTo, _menuOption.isEnabled);
            });
            resolve(_this._menuOptions);
        });
    };
    MenuOptionService.prototype.options = function () {
        return [
            {
                id: 100,
                title: 'Main Menu',
                display: 'Main Menu',
                icon: 'f11b',
                navigateTo: '/main',
                isEnabled: true
            },
            {
                id: 101,
                title: 'My Club',
                display: 'My Club',
                icon: 'f0c0',
                navigateTo: '/myclub',
                isEnabled: true
            },
            {
                id: 102,
                title: 'Browse Packs',
                display: 'Browse Packs',
                icon: 'f002',
                navigateTo: '/browsepacks',
                isEnabled: true
            },
            {
                id: 103,
                title: 'Buy Coins',
                display: 'Buy Coins',
                icon: 'f09d',
                navigateTo: '/buycoins',
                isEnabled: true
            },
            {
                id: 104,
                title: 'Settings',
                display: 'Settings',
                icon: 'f013',
                navigateTo: '/settings',
                isEnabled: true
            },
            {
                id: 105,
                title: 'Logout',
                display: 'Logout',
                icon: 'f011',
                navigateTo: '/',
                isEnabled: true
            }
        ];
    };
    return MenuOptionService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MenuOptionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5vcHRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUub3B0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZEQUFxRDtBQUdyRDtJQUlJO0lBRUEsQ0FBQztJQUVNLHNDQUFVLEdBQWpCO1FBQUEsaUJBaUJDO1FBZkcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFLLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFFbkMsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQUMsV0FBeUI7Z0JBQzdELE1BQU0sQ0FBQyxJQUFJLDZCQUFpQixDQUNwQixXQUFXLENBQUMsRUFBRSxFQUNkLFdBQVcsQ0FBQyxLQUFLLEVBQ2pCLFdBQVcsQ0FBQyxPQUFPLEVBQ25CLFdBQVcsQ0FBQyxJQUFJLEVBQ2hCLFdBQVcsQ0FBQyxVQUFVLEVBQ3RCLFdBQVcsQ0FBQyxTQUFTLENBQ3hCLENBQUE7WUFDVCxDQUFDLENBQUMsQ0FBQTtZQUVGLE9BQU8sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sbUNBQU8sR0FBZDtRQUVJLE1BQU0sQ0FBQztZQUNIO2dCQUNJLEVBQUUsRUFBRSxHQUFHO2dCQUNQLEtBQUssRUFBRSxXQUFXO2dCQUNsQixPQUFPLEVBQUUsV0FBVztnQkFDcEIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFNBQVMsRUFBRSxJQUFJO2FBQ2xCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixJQUFJLEVBQUUsTUFBTTtnQkFDWixVQUFVLEVBQUUsU0FBUztnQkFDckIsU0FBUyxFQUFFLElBQUk7YUFDbEI7WUFDRDtnQkFDSSxFQUFFLEVBQUUsR0FBRztnQkFDUCxLQUFLLEVBQUUsY0FBYztnQkFDckIsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLElBQUksRUFBRSxNQUFNO2dCQUNaLFVBQVUsRUFBRSxjQUFjO2dCQUMxQixTQUFTLEVBQUUsSUFBSTthQUNsQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxHQUFHO2dCQUNQLEtBQUssRUFBRSxXQUFXO2dCQUNsQixPQUFPLEVBQUUsV0FBVztnQkFDcEIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFNBQVMsRUFBRSxJQUFJO2FBQ2xCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixJQUFJLEVBQUUsTUFBTTtnQkFDWixVQUFVLEVBQUUsV0FBVztnQkFDdkIsU0FBUyxFQUFFLElBQUk7YUFDbEI7WUFDRDtnQkFDSSxFQUFFLEVBQUUsR0FBRztnQkFDUCxLQUFLLEVBQUUsUUFBUTtnQkFDZixPQUFPLEVBQUUsUUFBUTtnQkFDakIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsU0FBUyxFQUFFLElBQUk7YUFDbEI7U0FDSixDQUFBO0lBRUwsQ0FBQztJQUdMLHdCQUFDO0FBQUQsQ0FBQyxBQW5GRCxJQW1GQyJ9