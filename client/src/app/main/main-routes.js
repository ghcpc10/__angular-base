(function () { 'use strict';

  function MainRoutes ($stateProvider) {

    $stateProvider

      .state('app',{
        url: '/',
        templateUrl: '/src/app/main/main.html',
        controller: 'MainCtrl'
      })

  }





  angular.module('main')
    .config(['$stateProvider', MainRoutes]);
})();