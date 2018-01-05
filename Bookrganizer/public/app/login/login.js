(function () {
    'use strict';
    var controllerId = 'login';
    angular.module('app').controller(controllerId, ['common','$rootScope','$location','datacontext', login]);

    function login(common, $rootScope, $location, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.password = '';
        vm.username = '';

        activate();

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId)
                .then(function () {});
        }

        vm.login = function() {
            var promise = datacontext.checkUser(vm.username,vm.password).then(function (results) {
                if (results.length > 0)
                {
                    $rootScope.username = results[0].username;
                    $rootScope.userId = results[0].id;
                    $location.path('dashboard');
                }
                else {
                    vm.invalidLogin = true;
                }
            }, function (error) {
                console.log(error);
            });
        }

        vm.signUp = function()
        {
            $location.path('signUp');
        }

    }
})();