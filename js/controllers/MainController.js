app.controller('MainController', ['$scope', function ($scope) {


    $scope.scores = [];

    $scope.scores.push({name: 'foo', score: 0});
    $scope.scores.push( {name: 'bar', score: 0});

    $scope.newPlayer = function(){
        $scope.scores.push( {
            name: $scope.newPlayerName,
            score: 0
        });
        $scope.newPlayerName = "";
    };

    $scope.increaseScore = function (idx) {
      $scope.scores[idx].score++;
    };

    $scope.decreaseScore = function (idx) {
        $scope.scores[idx].score--;
    };

    $scope.removePlayer = function(idx){

        $scope.scores.splice(idx, 1);

    };


}]);
