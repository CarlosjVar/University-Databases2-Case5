"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var logger_1 = require("./logger/logger");
var routes_1 = require("./routes/routes");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.logger = new logger_1.Logger();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype.routes = function () {
        this.express.get('/', function (req, res, next) {
            res.send("Typescript App works!!");
        });
        // user route
        this.express.use('/api', routes_1["default"]);
        // handle undefined routes
        this.express.use('*', function (req, res, next) {
            res.send("Make sure url is correct!!!");
        });
    };
    return App;
}());
exports["default"] = new App().express;
