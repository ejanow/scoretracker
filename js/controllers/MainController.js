app.controller('MainController', ['$scope', function ($scope) {

    
    $scope.newPlayerName = "";

    $scope.scores = [
        {
            name: 'Eric',
            score: 1
        },
        {
            name: 'Roger',
            score: 0
        },
        {
            name: 'Eric',
            score: 1
        },
        {
            name: 'Roger',
            score: 0
        }

    ];

    $scope.newPlayer = function(){
        $scope.scores.push( {
            name: newPlayerName,
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