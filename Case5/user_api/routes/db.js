"use strict";
exports.__esModule = true;
var express = require("express");
var logger_1 = require("../logger/logger");
var tediousConnection_1 = require("../configs/tediousConnection");
var elasticConnection_1 = require("../configs/elasticConnection");
var mongooseConnection_1 = require("../configs/mongooseConnection");
// db setup
var app = express();
var logger = new logger_1.Logger();
// prueba
app.use('/getHashtag', function (req, res, next) {
    logger.info('databases route');
    tediousConnection_1["default"].connection.on('connect', function (err) {
        if (err) {
            console.log(err);
        }
    });
    var result = tediousConnection_1["default"].getData();
    res.send("hagamos la morición");
});
// Prueba conexión elastic
app.get('/elastictest', (function (req, res, next) {
    elasticConnection_1["default"].search({
        index: 'palabras'
    }, function (error, response, status) {
        if (error) {
            logger.error(error);
        }
        else {
            console.log("--- Response ---");
            console.log(response);
            console.log("--- Hits ---");
            response.hits.hits.forEach(function (hit) {
                console.log(hit);
            });
        }
    });
}));
app.get('/populate', function (req, res, next) {
    for (var i = 0; i < 18; i++) {
        mongooseConnection_1.MongooseController.getInstance().populateDB();
    }
    res.send("Base cargada");
});
exports["default"] = app;
