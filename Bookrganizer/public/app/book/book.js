(function () {
    'use strict';
    var controllerId = 'viewBook';
    angular.module('app').controller(controllerId, ['book','datacontext', '$scope','$uibModalInstance','$location', viewBook]);

    function viewBook(book, datacontext, $scope, $uibModalInstance,$location) {
        $scope.b = book;

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.delete = function () {
            var promise = datacontext.deleteBook($scope.b._id).then(function (results) {
                $uibModalInstance.close();
            }, function (error) {
                console.log(error);
                });
            $location.path("/dashboard");
            $uibModalInstance.close();

        };
    }
})();