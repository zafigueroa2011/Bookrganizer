(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common','$http', datacontext]);

    function datacontext(common, $http) {
        var $q = common.$q;

        var service = {
            checkUser: checkUser,
            signUp: signUp,
            getProfileInfo: getProfileInfo,
            addBook: addBook,
            addMovie: addMovie,
            addGame: addGame,
            getUsers: getUsers,
            sendMsg: sendMsg,
            getMsgs: getMsgs,
            changeProfile: changeProfile,
            updatePassword: updatePassword,
            getMovies: getMovies,
            getGames: getGames,
            getBooks: getBooks,
            deleteGame: deleteGame,
            deleteMovie: deleteMovie,
            deleteBook: deleteBook
        };

        return service;

        function checkUser(username,password)
        {
            var deferred = $q.defer();
            $http({
                url: '/api/checkLogin',
                method: "GET",
                params: { username: username, password: password }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
                });
            return deferred.promise;
        }

        function getProfileInfo(id) {
            var deferred = $q.defer();
            $http({
                url: '/api/getProfile',
                method: "GET",
                params: { userid: id }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function getUsers() {
            var deferred = $q.defer();
            $http({
                url: '/api/getUsers',
                method: "GET"
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function getMsgs(id) {
            var deferred = $q.defer();
            $http({
                url: '/api/getMessages',
                method: "GET",
                params: {userId: id}
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function getMovies(id) {
            var deferred = $q.defer();
            $http({
                url: '/api/getMovies',
                method: "GET",
                params: { userId: id }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function getBooks(id) {
            var deferred = $q.defer();
            $http({
                url: '/api/getBooks',
                method: "GET",
                params: { userId: id }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function getGames(id) {
            var deferred = $q.defer();
            $http({
                url: '/api/getGames',
                method: "GET",
                params: { userId: id }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function signUp(username, password, email, firstname, lastname)
        {
            var deferred = $q.defer();
            $http({
                url: '/api/signUp',
                method: "POST",
                params: { username: username, password: password, email: email, firstname: firstname, lastname:lastname }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function changeProfile(info) {
            var deferred = $q.defer();
            $http({
                url: '/api/updateProfile',
                method: "POST",
                params: { profile: info }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function updatePassword(info) {
            var deferred = $q.defer();
            $http({
                url: '/api/changePassword',
                method: "POST",
                params: { info: info }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function deleteBook(bid) {
            var deferred = $q.defer();
            $http({
                url: '/api/deleteBook',
                method: "POST",
                params: { id: bid }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function deleteGame(gid) {
            var deferred = $q.defer();
            $http({
                url: '/api/deleteGame',
                method: "POST",
                params: { id: gid }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function deleteMovie(mid) {
            var deferred = $q.defer();
            $http({
                url: '/api/deleteMovie',
                method: "POST",
                params: { id: mid }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function sendMsg(info) {
            var deferred = $q.defer();
            $http({
                url: '/api/sendMessage',
                method: "POST",
                params: { msg: info }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function addBook(bookInfo) {
            var deferred = $q.defer();
            $http({
                url: '/api/addBook',
                method: "POST",
                data: { book: bookInfo }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function addGame(gameInfo) {
            var deferred = $q.defer();
            $http({
                url: '/api/addGame',
                method: "POST",
                data: { game: gameInfo }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function addMovie(movieInfo) {
            var deferred = $q.defer();
            $http({
                url: '/api/addMovie',
                method: "POST",
                data: { movie: movieInfo }
            }).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }
    }
})();