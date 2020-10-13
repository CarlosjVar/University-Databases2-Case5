"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
mongoose.connect('mongodb://host.docker.internal:27017/Case5', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});
exports["default"] = db;
