"use strict";

var app = angular.module('dabbble', ['dabbble.controllers', 'dabble.filters'])

app.config(function ($routeProvider) {
	// AYMTK Angular guy didnt like having controller specified in routeProvider, instead specify in index.html
	$routeProvider
	.when("/:shots/:id", {controller:"ShotsCtrl", templateUrl: "partials/shot.html"})
	.when("/:list", {controller:"ShotsListCtrl", templateUrl: "partials/shots_list.html"})
	.otherwise({redirectTo: "/popular"})
})