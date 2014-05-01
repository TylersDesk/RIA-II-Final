angular.module('riafinal', ['ionic', 'riafinal.services', 'riafinal.controllers', 'riafinal.directives', 'd3', 'ngResource'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: "templates/home.html",
    controller:"homeCtrl"
  })

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the pet tab has its own child nav-view and history
    .state('tab.odd-index', {
      url: '/color',
      views: {
        'color-tab': {
          templateUrl: 'templates/team-index.html',
          controller: 'TeamIndexCtrl'
        }
      }
    })

    .state('tab.lots', {
      url: '/lots',
      views: {
        'lots-tab': {
          templateUrl: 'templates/lots-index.html',
          controller: 'lotsCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});

