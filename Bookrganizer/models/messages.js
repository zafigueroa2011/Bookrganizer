'use strict'
var mongoose = require('mongoose');

var messagesSchema = mongoose.Schema({
    from: String,
    to: String,
    text: String,
    time: Date
});

var messagesModel = mongoose.model('messages', messagesSchema);

module.exports = messagesModel;