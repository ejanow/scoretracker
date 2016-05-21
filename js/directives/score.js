app.directive('score', function () {

    return {
        restrict: 'E',
        scope: {
           info: "="
        },
        templateUrl: 'js/directives/score.html'
    };
});


