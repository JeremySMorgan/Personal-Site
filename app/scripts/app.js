'use strict';

/**
 * @ngdoc overview
 * @name personalSiteApp
 * @description
 * # personalSiteApp
 *
 * Main module of the application.
 */
angular
  .module('personalSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        //controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        //controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/art', {
        templateUrl: 'views/art.html',
        //controller: 'ArtCtrl',
        controllerAs: 'art'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        //controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
  /*    .when('/media', {
        templateUrl: 'views/media.html',
        //controller: 'MediaCtrl',
        controllerAs: 'media'
      })*/
      .otherwise({
        redirectTo: '/'
      });
  });
