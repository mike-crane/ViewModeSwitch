
var viewSwitch = angular.module('viewSwitch', ['ngRoute']);


viewSwitch.config(function($routeProvider) {
        $routeProvider


            .when('/', {
                templateUrl : 'grid.html',
            })
            .when('/Grid',  {
                templateUrl : 'grid.html',
            })
            .when('/List', {
                templateUrl : 'list.html',
            })
          });


viewSwitch.controller('mainController', function($scope) {
    console.log()

    $scope.message = ' ';
  });
