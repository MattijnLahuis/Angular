(function() {
    'use strict';

    angular
        .module('myApp.controllers')
        .controller("ToDoController", ToDoController);

    ToDoController.$inject = ['$scope'];

    function ToDoController($scope) {
        $scope.toDoInput = "";
        $scope.toDoList = [
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