'use strict'
var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    userId: String,
    ISBN: Number,
    title: String,
    author: String,
    genre: String,
    language: String,
    year: Number,
    pages: Number,
    location: String,
    formatType: String,
    rating: Number,
    image: String
});

var booksModel = mongoose.model('books', bookSchema);

module.exports = booksModel;