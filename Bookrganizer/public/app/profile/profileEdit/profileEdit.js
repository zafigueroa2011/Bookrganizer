(function () {
    'use strict';
    var controllerId = 'profileEdit';
    angular.module('app').controller(controllerId, ['common','datacontext', '$rootScope', '$location', '$scope', profileEdit]);

    function profileEdit(common, datacontext, $rootScope, $location, $scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.passwordN = "";
        vm.passwordO = "";
        vm.firstnameN = '';
        vm.lastnameN = '';
        vm.emailN = '';


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

        function checkPassword() {
            var promise = datacontext.checkUser($rootScope.username, vm.passwordO).then(function (results) {
                if (results.length > 0) {
                    vm.invalid = false;
                }
                else {
                    vm.invalid = true;
                }
            }, function (error) {
                console.log(error);
            });
        }

        vm.save = function () {
            if (vm.passwordO != "" && vm.passwordN != "")
            {
                checkPassword();
                if (vm.invalid == true) {
                    alert("The old password entered is incorrect. Please try again.");
                }
                else {
                    var info = {
                        userId: $rootScope.userId,
                        password: vm.passwordN
                    };
                    var promise = datacontext.updatePassword(info).then(function (results) {
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
            if (vm.firstnameN != "" || vm.lastnameN != "" || vm.emailN != "") {
                if (vm.firstnameN == "")
                {
                    vm.firstnameN = vm.firstname;
                }
                if (vm.lastnameN == "") {
                    vm.lastnameN = vm.lastname;
                }
                if (vm.emailN == "") {
                    vm.emailN = vm.email;
                }
                var info = {
                    userId: $rootScope.userId,
                    lastName: vm.lastnameN,
                    firstName: vm.firstnameN,
                    email: vm.emailN
                };
                var promise = datacontext.changeProfile(info).then(function (results) {
                }, function (error) {
                    console.log(error);
                });
            }
            $location.path('profile');
        };

        vm.cancel = function () {
            $location.path('profile');
        };
    }
})();