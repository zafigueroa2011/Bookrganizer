'use strict'
var mongoose = require('mongoose');

var profilesSchema = mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    id: Number,
    preferences: {
        sendEmail: String,
        sendNotifications: String
    }
});

var profileModel = mongoose.model('profiles', profilesSchema);

module.exports = profileModel;