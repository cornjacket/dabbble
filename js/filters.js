'use strict';

var filters = angular.module('dabbble.filters', [])

filters.filter('dabbbleDate', function($filter) { // function returns the filter

  return function (value, format) {
  	console.log("filters: " + value, format)
  	if (value) {
  		value = Date.parse(value)
  	}
  	return $filter('date')(value, format)
  }
})