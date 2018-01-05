'use strict'
var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    id: String,
    password: String,
    username: String
});

var userModel = mongoose.model('accounts', usersSchema);

module.exports = userModel;