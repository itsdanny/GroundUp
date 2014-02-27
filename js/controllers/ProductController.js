'use strict';

guApp.controller('ProductController',
    function ProductController($scope, ProductData) {
        $scope.products = ProductData.products;
        $scope.navType = 'pills';
});