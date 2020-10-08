"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var logger_1 = require("../logger/logger");
var user_1 = require("./user");
var Routes = /** @class */ (function () {
    function Routes() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new logger_1.Logger();
    }
    // Configure Express middleware.
    Routes.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    Routes.prototype.routes = function () {
        // user route
        this.express.use('/user', user_1["default"]);
    };
    return Routes;
}());
exports["default"] = new Routes().express;
