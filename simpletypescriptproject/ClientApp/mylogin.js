"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props, context) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            username: "sana",
            password: "saad"
        };
        return _this;
    }
    Login.prototype.handleClick = function (e) {
        alert(this.state.username);
    };
    Login.prototype.render = function () {
        return (React.createElement("div", null,
            "Hello ",
            this.state.name,
            "!",
            React.createElement("b", null, "Enter Name: "),
            React.createElement("br", null),
            React.createElement("input", { type: "text", id: "name", value: this.state.username }),
            React.createElement("br", null),
            React.createElement("b", null, "Enter Password: "),
            React.createElement("br", null),
            React.createElement("input", { type: "password", id: "password", value: this.state.password }),
            React.createElement("br", null),
            React.createElement("input", { type: "button", value: "Login", onClick: this.handleClick.bind(this) })));
    };
    return Login;
}(React.Component));
exports.default = Login;
