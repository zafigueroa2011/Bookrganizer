'use strict'
var mongoose = require('mongoose');

mongoose.connect("mongodb://@52.89.68.203:27017/Bookrganizer");

var db = mongoose.connection;

var usersSchema = mongoose.Schema({
    id: Number,
    password: String,
    username: String
});
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
var bookSchema = mongoose.Schema({
    ISBN: Number,
    title: String,
    author: String,
    genre: String,
    language: String,
    year: Number,
    pages: Number,
    location: String,
    formatType: String,
    rating: Number
});
var gamesSchema = mongoose.Schema({
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
var moviesSchema = mongoose.Schema({
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
var messagesSchema = mongoose.Schema({
    from: String,
    to: String,
    message: String,
    time: Date,
});

var userModel = mongoose.model('users', usersSchema);
var profileModel = mongoose.model('profiles', profilesSchema);
var messagesModel = mongoose.model('messages', messagesSchema);
var booksModel = mongoose.model('books', bookSchema);
var gamesModel = mongoose.model('games', gamesSchema);
var moviesModel = mongoose.model('movies', moviesSchema);

module.exports(userModel);
module.exports(profileModel);
module.exports(messagesModel);
module.exports(booksModel);
module.exports(gamesModel);
module.exports(moviesModel);