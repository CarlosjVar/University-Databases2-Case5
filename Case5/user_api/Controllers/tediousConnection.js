"use strict";
exports.__esModule = true;
var Connection = require('tedious').Connection;
var RequestTed = require('tedious').Request;
var TYPES = require('tedious').TYPES;
// db setup
var tediousManager = /** @class */ (function () {
    function tediousManager() {
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
        this.connection = new Connection(config);
    }
    tediousManager.prototype.getData = function () {
        this.connection.on('connect', function (err) {
            if (err) {
                console.log(err);
            }
        });
        var request = new RequestTed("SELECT * from Hashtags", function (err, rowCount, rows) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(rowCount + " rows returned");
            }
        });
        var result = "";
        request.on('row', function (columns) {
            var obj = JSON.parse(columns[0].value);
            console.log(obj);
        });
        request.on('done', function (rowCount, more) {
            console.log(rowCount + ' rows returned');
        });
        this.connection.execSql(request);
        return result;
    };
    return tediousManager;
}());
var tedious = new tediousManager();
exports["default"] = tedious;
