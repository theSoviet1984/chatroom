angular.module('chatroom')
.controller('mainCtrl', function($scope, parseService){

$scope.getParseData = function(){
  parseService.getData().then(function(result){
    $scope.messages=result;
  })
}

$scope.postData=function(){
  parseService.postData($scope.message);
}





  //uncomment this code when your getParseData function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
  setInterval(function(){
    $scope.getParseData();
  }, 1500)
})
