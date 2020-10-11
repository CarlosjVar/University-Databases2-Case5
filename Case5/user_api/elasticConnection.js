"use strict";
exports.__esModule = true;
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'host.docker.internal:9200'
});
exports["default"] = client;
