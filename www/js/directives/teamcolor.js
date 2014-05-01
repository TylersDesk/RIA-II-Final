angular.module('riafinal.directives', []).
directive('teamcolor', function($compile){
    return {
      restrict:'E',
      replace:true,
      templateUrl: '/templates/directives/teamcolor.html',
      scope: {
      	color : "=",
      	team  : "="
      }

    }
  });