(function () { 'use strict';

  angular
    .module('photo')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider

        .state('app.photo', {
          //abstract: true,
          url: 'photo',
          templateUrl: '/src/app/photo/photo.html',
          controller: 'PhotoCtrl'
        })
        .state('app.photo.upload', {
          url: '/upload',
          templateUrl: '/src/app/photo/upload/upload.html'
        })
        .state('app.photo.list', {
          url: '/list',
          templateUrl: '/src/app/photo/list/list.html'
        })
        .state('app.photo.social', {
          url: '/social',
          templateUrl: '/src/app/photo/social/social.html'
        })
        .state('app.photo.social.comments', {
          url: '/comments',
          templateUrl: '/src/app/photo/social/social-comments.html'
        })
        .state('app.photo.social.chat', {
          url: '/chat',
          templateUrl: '/src/app/photo/social/social-chat.html'
        })

    }]);



})();
