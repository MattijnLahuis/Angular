(function() {
    'use strict';

    angular.module('myApp', []);

    angular
        .module('myApp')
        .controller("ToDoController", ToDoController);

    ToDoController.$inject = ['$scope'];

    function ToDoController($scope) {
        $scope.toDoInput = "";
        $scope.toDoList = [
            {
                checked: false,
                name: "test"
            },
            {
                checked: false,
                name: "this"
            },
            {
                checked: false,
                name: "list"
            }
        ];


        $scope.addItem = function() {
            $scope.toDoList.push(
                {
                    checked: false,
                    name: $scope.toDoInput
                });
            $scope.toDoInput = "";
        }

        $scope.deleteItem = function(index) {
            $scope.toDoList.splice(index, 1);
        }
    }

})();