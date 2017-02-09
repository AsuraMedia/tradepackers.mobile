"use strict";
var types_1 = require("../../types");
var Errors = (function () {
    function Errors() {
        this.collection = new Map();
        this.list = new Array();
    }
    Errors.prototype.clear = function () {
        if (this.collection.size > 0) {
            this.collection.clear();
        }
        if (this.list.length > 0) {
            this.list = new Array();
        }
    };
    Errors.prototype.setForSignup = function () {
        var signupDto = new types_1.SignupDTO();
        this.collection.set('email', 'Invalid email address.');
        this.collection.set('password', 'Password must be at least 6 characters.');
        this.collection.set('passwordRepeat', "Password doesn't match.");
        this.collection.set('username', 'Username must be at least 4 characters.');
    };
    Errors.prototype.add = function (key) {
        var message = this.collection.get(key);
        this.list.push(message);
    };
    return Errors;
}());
exports.Errors = Errors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQ0FBcUM7QUFFckM7SUFLSTtRQUhRLGVBQVUsR0FBMEIsSUFBSSxHQUFHLEVBQWtCLENBQUE7UUFDOUQsU0FBSSxHQUFpQyxJQUFJLEtBQUssRUFBVSxDQUFBO0lBSS9ELENBQUM7SUFFTSxzQkFBSyxHQUFaO1FBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzNCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQTtRQUNuQyxDQUFDO0lBRUwsQ0FBQztJQUVNLDZCQUFZLEdBQW5CO1FBRUEsSUFBSSxTQUFTLEdBQWUsSUFBSSxpQkFBUyxFQUFFLENBQUE7UUFFdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLHdCQUF3QixDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLHlDQUF5QyxDQUFDLENBQUE7UUFDMUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUseUJBQXlCLENBQUMsQ0FBQTtRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUseUNBQXlDLENBQUMsQ0FBQTtJQUU5RSxDQUFDO0lBRU0sb0JBQUcsR0FBVixVQUFZLEdBQVk7UUFDcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDO0FBbkNZLHdCQUFNIn0=