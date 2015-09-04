'use strict';

var controllers = angular.module('dabbble.controllers', [])

controllers.controller('AppCtrl', function($scope) {

  $scope.name = "Module"
})

controllers.controller('ShotsListCtrl', function ($scope, $http) {

	$http.jsonp('http://api.dribbble.com/shots/popular?callback=JSON_CALLBACK').then(function (data) {
      $scope.list = data.data
      console.log(data)
      console.log(data.data.shots)
      data.data.shots.forEach(function(shot) {
        console.log(shot.title)
      })
	})
})

controllers.controller('ShotsCtrl', function ($scope) {


})