'use strict';

guApp.controller('ContactController',
    function ContactController($scope, ContactData) {
        $scope.contacts = ContactData.contacts;
    });