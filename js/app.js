'use strict';
var guApp = angular.module('guApp', ['ngResource', 'ngRoute','ngAnimate','ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider.when('/products',
        {
            templateUrl: 'html/templates/products.html',
            controller: 'ProductController'
        })
         .when('/about',
         {
             templateUrl: 'html/templates/about.html',
             controller: 'AboutController'
         })
         .when('/contact',
         {
             templateUrl: 'html/templates/contact.html',
             controller: 'ContactController'
         })
         .otherwise({
             redirectTo: '/products'
         });
    });