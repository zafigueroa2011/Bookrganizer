(function () {
    'use strict';
    var controllerId = 'signUp';
    angular.module('app').controller(controllerId, ['common','datacontext', '$rootScope', '$location','$scope', signUp]);

    function signUp(common, datacontext, $rootScope, $location,$scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.password = '';
        vm.username = '';
        vm.passwordConfirmation = '';
        vm.firstname = '';
        vm.lastname = '';
        vm.email = '';

        activate();

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId)
                .then(function () { });
        }

        vm.signUp = function () {
            var promise = datacontext.signUp(vm.username, vm.password, vm.email, vm.firstname, vm.lastname).then(function (results) {
                if (results) {
                    $rootScope.username = results.username;
                    $rootScope.userId = results.id;
                    $location.path('dashboard');
                }
                else {
                    vm.invalidLogin = true;
                }
            }, function (error) {
                console.log(error);
            });
        }

        vm.cancel = function () {
            $location.path('/');
        }

        $('input[type="password"]').change(function () {
            if (vm.password != vm.passwordConfirmation)
            {
                vm.passwordInvalid = true;
            }
            else {
                vm.passwordInvalid = false;
            }
            $scope.$digest();
        });
    }
})();