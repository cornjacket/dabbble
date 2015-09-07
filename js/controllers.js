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

  $scope.loadNextPage = function () {
    // list has already been loaded and so we can add one to it
    // add a new paramter to list method, params
    // note that i added a + to $scope.list.page because '1' + 1 was returning '11' instead of '2'
    dribbble.list(list, {page: +$scope.list.page + 1})
      .then(function (data) {
        // just to replace current 15 would be $scope.list = data.data
        // here we are keeping current list intact and updating page and
        // then concatting the new page on to list
        $scope.list.page = data.data.page
        $scope.list.shots = $scope.list.shots.concat(data.data.shots)
        console.log(data)
      })
  }

})

controllers.controller('ShotsCtrl', function ($scope, $routeParams, dribbble) {

  var id = $routeParams.id
	dribbble.shot(id)
   .then(function (data) {
      $scope.shot = data.data
      console.log(data)
	})

})