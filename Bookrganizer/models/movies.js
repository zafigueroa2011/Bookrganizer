'use strict'
var mongoose = require('mongoose');

var moviesSchema = mongoose.Schema({
    userId: String,
    image: String,
    title: String,
    actors: String,
    genre: String,
    rated: String,
    language: String,
    year: Number,
    format: String,
    location: String,
    rating: Number
});

var moviesModel = mongoose.model('movies', moviesSchema);

module.exports = moviesModel;