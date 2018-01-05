(function () {
    'use strict';
    var controllerId = 'profile';
    angular.module('app').controller(controllerId, ['common','datacontext', '$rootScope', '$location', '$scope', profile]);

    function profile(common, datacontext, $rootScope, $location, $scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        activate();

        function activate() {
            var logged = checkLogin();
            if (logged == true) {
                var promises = [getProfile()];
                common.activateController(promises, controllerId)
                    .then(function () { });
            }
            else {
                $location.path('/');
            }
        }

        function checkLogin() {
            if ($rootScope.userId) {
                return true;
            }
            else {
                return false;
            }
        }

        function getProfile() {
            var promise = datacontext.getProfileInfo($rootScope.userId).then(function (results) {
                if (results) {
                    vm.username = $rootScope.username;
                    vm.password = "password";
                    vm.firstname = results.firstName;
                    vm.lastname = results.lastName;
                    vm.email = results.email;
                }
            }, function (error) {
                console.log(error);
            });
        }

        vm.edit = function () {
            $location.path('profile/edit');
        };

    }
})();