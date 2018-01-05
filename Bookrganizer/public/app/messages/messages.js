(function () {
    'use strict';
    var controllerId = 'messages';
    angular.module('app').controller(controllerId, ['common','datacontext', '$rootScope', '$location', '$scope', messages]);

    function messages(common, datacontext, $rootScope, $location, $scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.tomsg = "";
        vm.msg = "";
        vm.users = [];
        vm.messages = [];

        vm.sendMsg = false;

        
        activate();

        function activate() {
            var logged = checkLogin();
            if (logged == true) {
                var promises = [getUsers()];
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

        function getUsers()
        {
            var promise = datacontext.getUsers().then(function (results) {
                if (results) {
                    vm.users = results;
                    getMsgs();
                }
            }, function (error) {
                console.log(error);
            });
        }

        function getMsgs() {
            var promise = datacontext.getMsgs($rootScope.userId).then(function (results) {
                if (results) {
                    vm.messages = results;
                    for (var i = 0; i < vm.messages.length; i++)
                    {
                        if (vm.messages[i].from == $rootScope.userId)
                        {
                            vm.messages[i].class = "sender";
                        }
                        else{
                            vm.messages[i].class = "receiver";
                        }
                        vm.messages[i].fromUsername = getUsername(vm.messages[i].from);
                    }
                }
            }, function (error) {
                console.log(error);
            });
        }

        function getUsername(id)
        {
            for (var i = 0; i < vm.users.length; i++) {
                if (id == vm.users[i].id)
                {
                    return vm.users[i].username;
                }
            }
        }

        vm.post = function () {
            vm.sendMsg = true;
        };

        vm.send = function () {
            var msg = {
                from: $rootScope.userId,
                to: vm.tomsg,
                text: vm.msg
            };
            var promise = datacontext.sendMsg(msg).then(function (results) {
                if (results) {
                    vm.messages = results;
                }
            }, function (error) {
                console.log(error);
            });
            vm.sendMsg = false;
            getMsgs();
        };

        vm.cancel = function () {
            vm.sendMsg = false;
        };


    }
})();