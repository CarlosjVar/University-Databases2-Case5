"use strict";
exports.__esModule = true;
exports.elasticController = void 0;
var logger_1 = require("../logger/logger");
var elasticsearch = require('elasticsearch');
var elasticController = /** @class */ (function () {
    function elasticController() {
        this.log = new logger_1.Logger();
        this.client = new elasticsearch.Client({
            host: '25.10.118.245:9200'
        });
    }
    elasticController.getInstance = function () {
        if (!this.instance) {
            this.instance = new elasticController();
        }
        return this.instance;
    };
    elasticController.prototype.getTagCount = function () {
        var _this = this;
        this.client.search({
            size: 0,
            index: 'palabras',
            body: {
                "aggs": {
                    "cuenta": {
                        terms: { "field": "palabra.keyword",
                            "size": 10000 }
                    }
                }
            }
        }).then(function (resp, error) {
            if (error) {
                _this.log.error(error);
            }
            _this.log.info(JSON.stringify(resp, null, 4));
        });
    };
    return elasticController;
}());
exports.elasticController = elasticController;
