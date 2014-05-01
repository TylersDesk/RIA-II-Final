angular.module('riafinal.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('TeamIndexCtrl', ['$scope', 'espnService',function($scope, espnService) {
  
  //Get Whatever we need from our service/resource
  var byu = espnService.getAPI('byu');
  var utah = espnService.getAPI('utah');
  var usu = espnService.getAPI('usu');

  //Object that will hold the team information 
  $scope.teams = {};
  
  //Bind results to the scope  
  byu.get( function(results) {
  	$scope.teams.byu = results.sports[0].leagues[0].teams[0];
  });

  //Bind results to the scope  
  utah.get( function(results) {
  	$scope.teams.utah = results.sports[0].leagues[0].teams[0];
  }); 

  //Bind results to the scope  
  usu.get( function(results) {
  	$scope.teams.usu = results.sports[0].leagues[0].teams[0];
  }); 

}])


.controller('lotsCtrl', ['$scope', 'espnService',function($scope, espnService) {
  var randomNumber = Math.floor(Math.random() * 200) + 1;
  var teamsoplenty = espnService.getLots(randomNumber);  

  //Object that will hold the team information 
  teamsoplenty.get(function(response) {
  	console.log(response.sports[0].leagues[0].teams);
  	$scope.teams = response.sports[0].leagues[0].teams;
  });
 
}]).controller('homeCtrl', function(){
  
});
