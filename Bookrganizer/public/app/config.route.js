(function () {
    'use strict';

    var app = angular.module('app');

    //location provider removing the hash prefix
    app.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/dashboard',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    showSidebar: true,
                    showNav: true
                }
            },
            {
                url: '/',
                config: {
                    templateUrl: 'app/login/login.html',
                    title: 'login'
                },
                showSidebar: false,
                showNav: false
            },
            {
                url: '/signUp',
                config: {
                    templateUrl: 'app/signUp/signUp.html',
                    title: 'signUp'
                },
                showSidebar: false,
                showNav: false
            },
            {
                url: '/logout',
                config: {
                    templateUrl: 'app/logout/logout.html',
                    title: 'logout'
                },
                showSidebar: false,
                showNav: false
            },
            {
                url: '/help',
                config: {
                    templateUrl: 'app/help/help.html',
                    title: 'help'
                },
                showSidebar: true,
                showNav: true
            },
            {
                url: '/addItem',
                config: {
                    templateUrl: 'app/addItem/addItem.html',
                    title: 'addItem'
                },
                showSidebar: true,
                showNav: true
            },
            {
                url: '/profile',
                config: {
                    templateUrl: 'app/profile/profile.html',
                    title: 'Profile'
                },
                showSidebar: true,
                showNav: true
            },
            {
                url: '/profile/edit',
                config: {
                    templateUrl: 'app/profile/profileEdit/profileEdit.html',
                    title: 'Edit Profile'
                },
                showSidebar: true,
                showNav: true
            },
            {
                url: '/messages',
                config: {
                    templateUrl: 'app/messages/messages.html',
                    title: 'Messages'
                },
                showSidebar: true,
                showNav: true
            }
        ];
    }
})();