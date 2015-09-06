'use strict';

var controllers = angular.module('dabbble.controllers', [])

controllers.controller('AppCtrl', function($scope) {

  $scope.name = "Module"
})

controllers.controller('ShotsListCtrl', function ($scope, dribbble, $routeParams) {

    //console.log($routeParams)
  var list = $routeParams.list

  dribbble.list(list).then(function (data) {
      $scope.list = data.data
      console.log(data)
      console.log(data.data.shots)
      /*data.data.shots.forEach(function(shot) {
        console.log(shot.title)
      })*/
	})
})

controllers.controller('ShotsCtrl', function ($scope, $routeParams, dribbble) {

  var id = $routeParams.id
	dribbble.shot(id)
   .then(function (data) {
      $scope.shot = data.data
      console.log(data)
	})

})