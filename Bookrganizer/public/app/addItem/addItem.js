(function () {
    'use strict';
    var controllerId = 'addItem';
    angular.module('app').controller(controllerId, ['common','datacontext', '$rootScope', '$location','$scope', addItem]);

    function addItem(common, datacontext, $rootScope, $location,$scope) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.arrayBuffer = "";
        vm.type = 'Book';
        vm.genre = '';
        vm.genres = ['Science fiction', 'Drama', 'Action and Adventure', 'Romance', 'Mystery', 'Horror', 'Self-Help', 'Health',
            'Guide', 'Travel', "Children's", 'Religion', 'Science', 'History', 'Math', 'Anthology', 'Poetry', 'Encyclopedia', 'Dictionary',
            'Comic','Art','Cooking','Journal','Biography','Memoir','Fantasy','Other'];
        vm.languages = ['English','Spanish','French','Italian','Portuguese','Chinese','Other']

        vm.addItem = function () {
            var item = {};
            item.userId = $rootScope.userId;
            item.image = vm.arrayBuffer;
            if (vm.type == "Book")
            {
                item.isbn = vm.isbn;
                item.title = vm.title;
                item.author = vm.author;
                item.genre = vm.genre;
                item.language = vm.language;
                item.year = vm.year;
                item.pages = vm.pages;
                item.rating = vm.rating;
                item.location = vm.location;
                item.format = vm.format;
                var promise = datacontext.addBook(item).then(function (results) {
                    if (results) {
                        $location.path("/dashboard");
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else if (vm.type == "Movie") {
                item.title = vm.title;
                item.actors = vm.actors;
                item.genre = vm.genre;
                item.language = vm.language;
                item.year = vm.year;
                item.rating = vm.rating;
                item.location = vm.location;
                item.format = vm.format;
                item.rated = vm.rated;
                var promise = datacontext.addMovie(item).then(function (results) {
                    if (results) {
                        $location.path("/dashboard");
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                item.title = vm.title;
                item.modes = vm.modes;
                item.genre = vm.genre;
                item.year = vm.year;
                item.rating = vm.rating;
                item.location = vm.location;
                item.platform = vm.platform;
                item.rated = vm.rated;
                item.publishers = vm.publishers;
                var promise = datacontext.addGame(item).then(function (results) {
                    if (results) {
                        $location.path("/dashboard");
                    }
                }, function (error) {
                    console.log(error);
                });
            }
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

        $('input[type="radio"]').on('change', function () {
            var value = $('input[name=type]:checked').val();
            vm.type = value;
            $scope.$digest();
        });

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#imagePreview').attr('src', e.target.result);
                    vm.arrayBuffer = this.result;
                }
                //reader2.onload = function (e) {
                //    vm.arrayBuffer = this.result;
                //    var array = new Uint8Array(vm.arrayBuffer);
                //    var arrayBuffer = String.fromCharCode.apply(null, array);
                //}
                reader.readAsDataURL(input.files[0]);
                //reader2.readAsArrayBuffer(input.files[0]);
            }
        }

        $("#imagePreview").click(function () {
            $("#imageFile").trigger('click');
        });

        $("#imageFile").change(function () {
            readURL(this);
        });
    }
})();