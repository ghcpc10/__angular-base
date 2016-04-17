(function () { 'use strict';

  angular.module('photo', [])
    .controller('PhotoCtrl', ['$scope', '$state', '$window', function($scope, $state, $window) {

      $scope.totalPages = 3;
    }]);
})();