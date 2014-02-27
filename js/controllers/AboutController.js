'use strict';

guApp.controller('AboutController',
    function AboutController($scope, AboutData) {
        $scope.about = AboutData.About;
    });