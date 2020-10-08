"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var http = require("http");
var logger_1 = require("./logger/logger");
var port = 3070;
var logger = new logger_1.Logger();
app_1["default"].set('port', port);
var server = http.createServer(app_1["default"]);
server.listen(port);
server.on('listening', function () {
    var addr = server.address();
    var bind = (typeof addr === 'string') ? "pipe " + addr : "port " + addr.port;
    logger.info("Listening on " + bind);
});
module.exports = app_1["default"];
