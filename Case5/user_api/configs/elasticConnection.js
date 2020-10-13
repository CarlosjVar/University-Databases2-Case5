"use strict";
exports.__esModule = true;
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: '25.10.118.245:9200'
});
exports["default"] = client;
