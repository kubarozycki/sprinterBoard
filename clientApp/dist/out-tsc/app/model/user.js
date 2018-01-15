"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(email, password) {
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        this.email = email;
        this.password = password;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map