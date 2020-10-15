"use strict";
exports.__esModule = true;
var express = require("express");
var logger_1 = require("../logger/logger");
var tediousConnection_1 = require("../Controllers/tediousConnection");
var elasticConnection_1 = require("../Controllers/elasticConnection");
var mongooseConnection_1 = require("../Controllers/mongooseConnection");
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
    var tags = elasticConnection_1.elasticController.getInstance().getTagCount();
    res.json(JSON.stringify(tags, null, 4));
}));
app.get('/getArticles', function (req, res, next) {
    mongooseConnection_1.MongooseController.getInstance().getArticlesByTag(["vampire/zetsuen", "tournament", "shana", "everyone"]);
    res.send("enviao");
});
app.get('/populate', function (req, res, next) {
    for (var i = 0; i < 18; i++) {
        mongooseConnection_1.MongooseController.getInstance().populateDB();
    }
    res.send("Base cargada");
});
exports["default"] = app;
