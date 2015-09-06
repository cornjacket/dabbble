'use strict';

var services = angular.module('dabbble.services', [])

services.factory('dribbble', function($http) {
  
  function load(path, params) {
  	return $http.jsonp('http://api.dribbble.com'+ path +'?callback=JSON_CALLBACK')
  }

  return {
  	list: function (type) {
  		return load("/shots/" + type) 
  	},
  	shot: function (id) {
  		return load("/shots/" + id)
  	}
  }
})