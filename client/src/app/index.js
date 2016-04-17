'use strict';


angular.module('bellabeaute', [
    'ui.router',
    'main',
    'home',
    'photo',
    'products',
    'user'
  ])
  .constant('APP_CONSTANTS', {})
  .config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  }])
  .run();