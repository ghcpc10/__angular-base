(function () { 'use strict';


  angular
    .module('home')
    .config(['$stateProvider', function ($stateProvider) {

      $stateProvider
        .state('app.home', {
          url: 'home',
          templateUrl: 'src/app/home/home.html',
          controller: 'HomeCtrl'
        })

    }]);



})();
