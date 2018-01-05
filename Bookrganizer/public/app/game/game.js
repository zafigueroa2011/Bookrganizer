(function () {
    'use strict';
    var controllerId = 'viewGame';
    angular.module('app').controller(controllerId, ['game', '$scope', '$uibModalInstance','$location','datacontext', viewGame]);

    function viewGame(game, $scope, $uibModalInstance, $location, $datacontext) {
        $scope.g = game;

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.delete = function () {
            var promise = datacontext.deleteGame($scope.g._id).then(function (results) {
                $uibModalInstance.close();
            }, function (error) {
                console.log(error);
            });
            $location.path("/dashboard");
            $uibModalInstance.close();

        };
    }
})();