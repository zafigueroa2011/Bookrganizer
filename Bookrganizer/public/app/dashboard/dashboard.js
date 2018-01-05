(function () {
    'use strict';
    var controllerId = 'dashboard';
    angular.module('app').controller(controllerId, ['common','$uibModal','datacontext', '$rootScope','$location', dashboard]);

    function dashboard(common, $uibModal, datacontext, $rootScope, $location) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.today = new Date();

        vm.movies = [];
        vm.books = [];
        vm.games = [];

        vm.addItem = function () {
            $location.path('addItem');
        };

        activate();

        function activate() {
            var logged = checkLogin();
            if (logged == true)
            {
                var promises = [getBooks()];
                common.activateController(promises, controllerId)
                    .then(function () { log('Welcome to the dashboard '+$rootScope.username); });
            }
            else {
                $location.path('/');
            }            
        }

        function checkLogin()
        {
            if ($rootScope.userId)
            {
                return true;
            }
            else {
                return false;
            }
        }

        function getBooks() {
            var promise = datacontext.getBooks($rootScope.userId).then(function (results) {
                if (results) {
                    vm.books = results;
                    getMovies();
                }
            }, function (error) {
                console.log(error);
            });
        }

        function getMovies() {
            var promise = datacontext.getMovies($rootScope.userId).then(function (results) {
                if (results) {
                    vm.movies = results;
                    getGames();
                }
            }, function (error) {
                console.log(error);
            });
        }

        function getGames() {
            var promise = datacontext.getGames($rootScope.userId).then(function (results) {
                if (results) {
                    vm.games = results;
                }
            }, function (error) {
                console.log(error);
            });
        }

        vm.viewMessages = function () {
            $location.path("/messages");
        };

        vm.openBook = function (id) {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: './book/book.html',
                controller: 'viewBook',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    book: function () {
                        return vm.books[id];
                    }
                }
            });
        };

        vm.openGame = function (id) {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: './game/game.html',
                controller: 'viewGame',
                controllerAs: 'vm',
                size: 'sm',
                resolve: {
                    game: function () {
                        return vm.games[id];
                    }
                }
            });
        };

        vm.openMovie = function (id) {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: './movie/movie.html',
                controller: 'viewMovie',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    movie: function () {
                        return vm.movies[id];
                    }
                }
            });
        };
    }
})();