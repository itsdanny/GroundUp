'use strict';

guApp.controller('NavController',
    function NavController($scope, NavData) {
        $scope.nav = NavData.nav;
    });