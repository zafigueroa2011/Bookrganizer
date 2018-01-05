(function () {
    'use strict';
    var controllerId = 'help';
    angular.module('app').controller(controllerId, ['common', '$rootScope', '$location', help]);

    function help(common, $rootScope, $location) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

        activate();

        function activate() {
            var logged = checkLogin();
            if (logged == true) {
                var promises = [];
                common.activateController(promises, controllerId)
                    .then(function () {});
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
    }
})();