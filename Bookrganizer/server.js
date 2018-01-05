'use strict';
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = process.env.PORT || 1337;

var app = express();

var user = require('./models/users');
var profile = require('./models/profile');
var books = require('./models/books');
var msgs = require('./models/messages');
var games = require('./models/games');
var movies = require('./models/movies');

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'));
app.use(express.static('server'));

mongoose.connect('mongodb://@52.89.68.203:27017/Bookrganizer', function (error) {
    if (error) {
        console.log(error);
    }
});

app.get('/', function (request, response) {
    response.sendFile("public/index.html");
});

app.get('#/dashboard', function (request, response) {
    response.sendFile("dashboard/dashboard.html", { root: "public/app" });
});

app.get('/book/book.html', function (request, response) {
    response.sendFile("book/book.html", { root:"public/app"});
});

app.get('/movie/movie.html', function (request, response) {
    response.sendFile("movie/movie.html", { root: "public/app" });
});

app.get('/game/game.html', function (request, response) {
    response.sendFile("game/game.html", { root: "public/app" });
});

app.get('#/signUp', function (request, response) {
    response.sendFile("signUp/signUp.html", { root: "public/app" });
});

app.get('#/logout', function (request, response) {
    response.sendFile("logout/logout.html", { root: "public/app" });
});

app.get('#/help', function (request, response) {
    response.sendFile("help/help.html", { root: "public/app" });
});

app.get('#/addItem', function (request, response) {
    response.sendFile("addItem/addItem.html", { root: "public/app" });
});

app.get('#/profile', function (request, response) {
    response.sendFile("profile/profile.html", { root: "public/app" });
});

app.get('#/profile/edit', function (request, response) {
    response.sendFile("profile/profileEdit/profileEdit.html", { root: "public/app" });
});

app.get('#/messages', function (request, response) {
    response.sendFile("messages/messages.html", { root: "public/app" });
});

app.get('/api/getUsers', function (request, response) {
    user.find({},'username id _id', function (err, users) {
        if (err) {
            throw err;
        }
        response.json(users);
    });
});

app.get('/api/getMessages', function (request, response) {
    if (request.query.userId)
    {
        msgs.find({ $or: [{ 'from': request.query.userId }, { 'to': request.query.userId }] }, function (err, msgs) {
            if (err) {
                throw err;
            }
            response.json(msgs);
        });
    }
});

app.get('/api/checkLogin', function (request, response) {
    if (request.query.username && request.query.password)
    {
        user.find({ username: request.query.username, password: request.query.password }, function (err, users) {
            if (err) {
                throw err;
            }
            response.json(users);
        });
    }
});

app.get('/api/getBooks', function (request, response) {
    if (request.query.userId) {
        books.find({ userId: request.query.userId }, function (err, books) {
            if (err) {
                throw err;
            }
            response.json(books);
        });
    }
});

app.get('/api/getMovies', function (request, response) {
    if (request.query.userId) {
        movies.find({ userId: request.query.userId }, function (err, movies) {
            if (err) {
                throw err;
            }
            response.json(movies);
        });
    }
});

app.get('/api/getGames', function (request, response) {
    if (request.query.userId) {
        games.find({ userId: request.query.userId }, function (err, games) {
            if (err) {
                throw err;
            }
            response.json(games);
        });
    }
});

app.get('/api/getProfile', function (request, response) {
    if (request.query.userid) {
        //var id = new ObjectId(request.query.userid);
        profile.findById(request.query.userid, function (err, profile) {
            if (err) {
                throw err;
            }
            response.json(profile);
        });
    }
});

app.post('/api/signUp', function (request, response) {
    if (request.query.username && request.query.password && request.query.firstname && request.query.lastname && request.query.email) {
        var newProfile = profile({
            lastName: request.query.lastname,
            firstName: request.query.firstname,
            email: request.query.email
        });
        //save profile
        newProfile.save(function (err, profile) {
            if (err) {
                throw err;
            }
            //save user
            var newUser = user({
                username: request.query.username,
                password: request.query.password,
                id: profile._id.toString()
            });
            newUser.save(function (err, user) {
                if (err) {
                    throw err;
                }
                response.json(user);
            });
        });
    }
});

app.post('/api/addBook', function (request, response) {
    if (request.body.book) {
        var book = request.body.book;
        var newBook = books({
            image: book.image,
            userId: book.userId,
            ISBN: book.isbn,
            title: book.title,
            author: book.author,
            genre: book.genre,
            language: book.language,
            year: book.year,
            pages: book.pages,
            location: book.location,
            formatType: book.format,
            rating: book.rating
        });
        //save new book
        newBook.save(function (err, book) {
            if (err) {
                throw err;
            }
            response.json(book);
        });
    }
});

app.post('/api/addMovie', function (request, response) {
    if (request.body.movie) {
        var movie = request.body.movie;
        var newMovie = movies({
            image: movie.image,
            userId: movie.userId,
            actors: movie.actors,
            title: movie.title,
            rated: movie.rated,
            genre: movie.genre,
            language: movie.language,
            year: movie.year,
            format: movie.format,
            location: movie.location,
            rating: movie.rating
        });
        //save new movie
        newMovie.save(function (err, movie) {
            if (err) {
                throw err;
            }
            response.json(movie);
        });
    }
});

app.post('/api/addGame', function (request, response) {
    if (request.body.game) {
        var game = request.body.game;
        var newgame = games({
            image: game.image,
            userId: game.userId,
            title: game.title,
            platform: game.platform,
            genre: game.genre,
            rated: game.rated,
            year: game.year,
            modes: game.modes,
            location: game.location,
            publishers: game.publishers,
            rating: game.rating
        });
        //save new game
        newgame.save(function (err, game) {
            if (err) {
                throw err;
            }
            response.json(game);
        });
    }
});

app.post('/api/sendMessage', function (request, response) {
    if (request.query.msg) {
        var msg = JSON.parse(request.query.msg);
        var newMsg = msgs({
            from: msg.from,
            to: msg.to,
            text: msg.text,
            time: Date.now()
        });
        //save message
        newMsg.save(function (err, msg) {
            if (err) {
                throw err;
            }
            response.json(msg);
        });
    }
});

app.post('/api/updateProfile', function (request, response) {
    if (request.query.profile)
    {
        var info = JSON.parse(request.query.profile);
        profile.findByIdAndUpdate(info.userId, {
            lastName: info.lastName,
            firstName: info.firstName,
            email: info.email }, function (err, profile) {
            if (err) {
                throw err;
            }  
        });
    }
});

app.post('/api/changePassword', function (request, response) {
    if (request.query.info) {
        var info = JSON.parse(request.query.info);
        user.findOneAndUpdate({id: info.userId}, { password: info.password}, function (err, user) {
            if (err) {
                throw err;
            } 
        });
    }
});

app.post('/api/deleteBook', function (request, response) {
    if (request.query.id) {
        books.findByIdAndRemove(request.query.id, function (err, book) {
            if (err) {
                throw err;
            }
        });
    }
});

app.post('/api/deleteMovie', function (request, response) {
    if (request.query.id) {
        movies.findByIdAndRemove(request.query.id, function (err, movie) {
            if (err) {
                throw err;
            }
        });
    }
});

app.post('/api/deleteGame', function (request, response) {
    if (request.query.id) {
        games.findByIdAndRemove(request.query.id, function (err, game) {
            if (err) {
                throw err;
            }
        });
    }
});

app.listen(port);


