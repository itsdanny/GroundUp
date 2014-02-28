'use strict';

guApp.controller('HomeController',
    function HomeController($scope, HomeData) {
        $scope.home = HomeData.home;
    });