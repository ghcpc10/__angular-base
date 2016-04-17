(function () { 'use strict';

  // called in index.js run block to initialize the app
  function initializer ($rootScope, $anchorScroll, $state, $window, $http, $templateCache, $location, httpInterceptor, esAnalyticsHelper) {

    var _watchStateChanges = function () {
      // carry over all query string params from state to state
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        var searchObj = $location.search();

        // if toParams query param doesn't match the searchObj,
        // that means it has been updated within the app
        for (var prop in searchObj) {
          if (searchObj[prop] !== toParams[prop] && toParams[prop] != undefined) {
            searchObj[prop] = toParams[prop];
          }
        }

        // pass any extra query params in url to state params
        angular.extend(toParams, searchObj);

      });

      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $anchorScroll();

        // Google Analytics
        esAnalyticsHelper.firePageview(toState.name);

      });
    }

    return {
      watchStateChanges: _watchStateChanges
    }
  }


  angular
      .module('main')
      .factory('initializer', ['$rootScope', '$anchorScroll', '$state', '$window', '$http', '$templateCache', '$location', 'httpInterceptor', 'esAnalyticsHelper', initializer]);


})();
