(function () {
    'use strict';
    var controllerId = 'viewMovie';
    angular.module('app').controller(controllerId, ['movie', '$scope', '$uibModalInstance', 'datacontext', '$location', viewMovie]);

    function viewMovie(movie, $scope, $uibModalInstance, datacontext, $location) {
        $scope.m = movie;

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.delete = function () {
            var promise = datacontext.deleteMovie($scope.m._id).then(function (results) {
                $uibModalInstance.close();
            }, function (error) {
                console.log(error);
            });
            $location.path("/dashboard");
            $uibModalInstance.close();

        };
    }
})();