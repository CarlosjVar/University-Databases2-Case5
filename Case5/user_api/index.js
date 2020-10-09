"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var http = require("http");
var logger_1 = require("./logger/logger");
var port = 3070;
var logger = new logger_1.Logger();
// Database connections
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var config = {
    server: 'host.docker.internal',
    port: Number(process.env.PORT),
    authentication: {
        type: 'default',
        options: {
            userName: 'User',
            password: '1234'
        }
    },
    dialect: 'mssql',
    options: {
        database: 'Caso5BD2',
        encrypt: false
    }
};
var connection = new Connection(config);
connection.on('connect', function (err) {
    if (err) {
        logger.error(err);
    }
    else {
        logger.info("Conectado a MSSQL!");
    }
    // connection.executeStatement()
});
app_1["default"].set('port', port);
var server = http.createServer(app_1["default"]);
server.listen(port);
server.on('listening', function () {
    var addr = server.address();
    var bind = (typeof addr === 'string') ? "pipe " + addr : "port " + addr.port;
    logger.info("Listening on " + bind);
});
module.exports = app_1["default"];
