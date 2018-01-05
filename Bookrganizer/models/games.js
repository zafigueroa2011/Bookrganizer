'use strict'
var mongoose = require('mongoose');

var gamesSchema = mongoose.Schema({
    userId: String,
    image: String,
    title: String,
    platform: String,
    genre: String,
    rated: String,
    modes: String,
    year: Number,
    publishers: String,
    location: String,
    rating: Number
});

var gamesModel = mongoose.model('games', gamesSchema);

module.exports = gamesModel;