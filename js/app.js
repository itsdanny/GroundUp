'use strict';
var guApp = angular.module('guApp', ['ngResource', 'ngRoute','ngAnimate'])
    .config(function ($routeProvider) {
        $routeProvider.when('/products',
        {
            templateUrl: 'templates/products.html',
            controller: 'ProductController'
        })
         .when('/about',
         {
             templateUrl: 'templates/about.html',
             controller: 'AboutController'
         })
         .when('/contact',
         {
             templateUrl: 'templates/contact.html',
             controller: 'ContactController'
         })
         .otherwise({
             redirectTo: '/products'
         });
    });