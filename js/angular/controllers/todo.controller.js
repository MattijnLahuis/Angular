(function() {
    'use strict';

    angular
        .module('myApp.controllers')
        .controller("ToDoController", ToDoController);

    ToDoController.$inject = ['$scope'];

    function ToDoController($scope) {
        $scope.message = "hello";
        $scope.toDoList = ["a list", "of test", "items"];
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