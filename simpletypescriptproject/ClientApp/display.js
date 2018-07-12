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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var axios_1 = __importDefault(require("axios"));
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            username: "sana",
            output: ""
        };
        _this.updateInputValue = _this.updateInputValue.bind(_this);
        return _this;
    }
    Login.prototype.handleClick = function (e) {
        //axios.get('http://localhost:62972/api/Utility/GetDisplayContent/' + this.state.username)
        //    .then(response => this.setState({ output: response.data }) )
        var user = { username: "saad", password: "apple123", email: "saad@hotmail.com" };
        var url = "http://localhost:62972/api/account/signin";
        alert("handle click");
        axios_1.default.post(url, { user: user })
            .then(function (res) {
            console.log(res);
            console.log(res.data);
        });
    };
    Login.prototype.componentDidMount = function () {
        var _this = this;
        alert("Hello");
        axios_1.default.get('http://localhost:62972/api/account/GetDisplayContent/' + this.state.username)
            .then(function (response) { return _this.setState({ output: response.data }); });
    };
    Login.prototype.updateInputValue = function (e) {
        this.setState({
            username: e.target.value
        });
    };
    Login.prototype.render = function () {
        return (React.createElement("div", null,
            "Enter Name: ",
            React.createElement("br", null),
            React.createElement("div", null,
                this.state.output,
                " "),
            React.createElement("br", null),
            React.createElement("input", { type: "button", value: "Login", onClick: this.handleClick.bind(this) })));
    };
    return Login;
}(React.Component));
exports.default = Login;
