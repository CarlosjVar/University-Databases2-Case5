"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Articles = mongoose.model('Article', new Schema({
    Name: String,
    Author: String,
    PostTime: String,
    Sections: [{ Content: String, ComponentType: Number }],
    Hashtags: [String]
}));
exports["default"] = Articles;
