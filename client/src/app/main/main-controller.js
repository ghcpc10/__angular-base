(function () { 'use strict';

  function MainCtrl ($scope, $state, $window, APP_CONSTANTS) {

    $scope.$on('$stateChangeStart', function (event, toState, toParams) {
    });

    $scope.$on('$stateChangeSuccess', function (event, toState, toParams) {
    });
  }





  angular
    .module('main')
      .controller('MainCtrl', ['$scope', '$state', '$window', 'APP_CONSTANTS', MainCtrl]);
})();
