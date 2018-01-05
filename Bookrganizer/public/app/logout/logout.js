(function () {
    'use strict';
    var controllerId = 'logout';
    angular.module('app').controller(controllerId, ['common', '$rootScope', '$location', logout]);

    function logout(common, $rootScope, $location) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        activate();

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId)
                .then(function () { });
        }

        vm.logout = function () {
            $rootScope = '';
            $location.path('/');
        }

        vm.cancel = function () {
            window.history.back();
        }
    }
})();