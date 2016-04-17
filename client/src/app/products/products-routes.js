(function () { 'use strict';


  angular
    .module('products')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider

        .state('app.products', {
          url: 'products',
          templateUrl: '/src/app/products/products.html',
          controller: 'ProductsCtrl'
        })

    }]);



})();
