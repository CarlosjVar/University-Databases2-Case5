"use strict";
exports.__esModule = true;
var express = require("express");
var logger_1 = require("../logger/logger");
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var elasticConnection_1 = require("../elasticConnection");
// db setup
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
        rowCollectionOnRequestCompletion: true,
        encrypt: false
    }
};
var connection = new Connection(config);
// express setup
var app = express();
var logger = new logger_1.Logger();
// prueba
app.use('/getHashtag', function (req, res, next) {
    logger.info('databases route');
    connection.on('connect', function (err) {
        if (err) {
            console.log(err);
        }
    });
    var result = executeStatement();
    res.send("hagamos la morición");
});
// Prueba conexión elastic
app.use('/elastictest', (function (req, res, next) {
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
function executeStatement() {
    var request = new Request("SELECT * from Hashtags", function (err, rowCount, rows) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(rowCount + " rows returned");
        }
    });
    var result = "";
    request.on('row', function (columns) {
        var obj = JSON.parse(columns[1].value);
        console.log(obj);
    });
    request.on('done', function (rowCount, more) {
        console.log(rowCount + ' rows returned');
    });
    connection.execSql(request);
    return result;
}
exports["default"] = app;
