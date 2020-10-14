"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Articles = mongoose.model('Article', new Schema({
    Name: String,
    Author: String,
    PostTime: String,
    Titles: [{ Title: String, Position: Number }],
    Subtitles: [{ Subtitle: String, Position: Number }],
    Texts: [{ Text: String, Position: Number }],
    Media: [{ url: String, Position: Number }],
    Hashtags: [String]
}));
exports["default"] = Articles;
