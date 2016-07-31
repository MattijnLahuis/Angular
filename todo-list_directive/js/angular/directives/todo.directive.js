(function() {
    'use strict';

    angular
        .module('myApp.directives')
        .directive('toDo', function() {
            return {
                restrict: 'EA',
                controller: 'ToDoController',

                templateUrl: "js/angular/templates/todo.template.html"
            }
        }
    );
})();