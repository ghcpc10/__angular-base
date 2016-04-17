(function () { 'use strict';

  angular
    .module('user')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider

        .state('app.user', {
          //abstract: true,
          url: 'user',
          templateUrl: '/src/app/user/user.html',
          controller: 'UserCtrl'
        })
        .state('app.user.login', {
          url: '/login',
          templateUrl: '/src/app/user/login/login.html'
        })
        .state('app.user.logout', {
          url: '/logout',
          templateUrl: '/src/app/user/logout/logout.html'
        })
        .state('app.user.register', {
          url: '/register',
          templateUrl: '/src/app/user/register/register.html'
        })
        .state('app.user.forgetpass', {
          url: '/forgetpass',
          templateUrl: '/src/app/user/forgetpass/forgetpass.html'
        })
        .state('app.user.edit', {
          url: '/edit',
          templateUrl: '/src/app/user/edit/edit.html'
        });

    }]);


})();
