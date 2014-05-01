angular.module('riafinal.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('espnService', ['$resource','$q', function($resource,$q){
  var espnAPI = {
    key: '?apikey=dhhpudxj5s3htnx42tnd6g79',
    limitkey : '&limit=20&apikey=dhhpudxj5s3htnx42tnd6g79',
    baseurl: 'http://api.espn.com/v1/sports/football/college-football',
    resource: '/teams/',
    uouID: 254,
    usuID: 328,
    byuID: 252
  };
  
  //Api Test URL
  //http://api.espn.com/v1/sports/football/college-football/teams/254?apikey=dhhpudxj5s3htnx42tnd6g79

  return {
    getAPI : function(teamID) {
      var team;
      if (teamID === 'byu') {
        team = espnAPI.byuID;
      } else if (teamID === 'utah') {
        team = espnAPI.uouID;
      } else if (teamID === 'usu') {
        team = espnAPI.usuID;
      } else {
        team = espnAPI.byuID;
      }

      return $resource(espnAPI.baseurl + espnAPI.resource + team + espnAPI.key, {});
    },
    getLots : function(randomnum) {
      console.log('random offest is', randomnum);
      return $resource(espnAPI.baseurl + espnAPI.resource + '?offset=' + randomnum + espnAPI.limitkey,{});
    }
  }
}]);
