app.controller('MainController', ['$scope', function ($scope) {


    $scope.scores = [];

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


}]);