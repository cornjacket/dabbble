'use strict';

function AppCtrl ($scope) {
  $scope.name = "World!"
  $scope.updateName = function () {
  	$scope.name = "World from function"
  }
}