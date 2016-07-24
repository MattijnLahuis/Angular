(function() {
    'use strict';

    angular.module('myApp', []);

    angular
        .module('myApp')
        .controller("ToDoController", ToDoController);

    ToDoController.$inject = ['$scope'];

    function ToDoController($scope) {
        $scope.message = "hello";
        $scope.toDoList = [];
        $scope.toDoInput = "";


        function init() {

        }

        $scope.addItem = function() {
            if($scope.toDoInput) {
                $scope.toDoList.push($scope.toDoInput);
                $scope.toDoInput = "";
            }
        };

        init();
    }

})();