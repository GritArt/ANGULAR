var app = angular.module('myApp', []);
app.service('ageService', function () {
    this.check = function (x) {
        if (x === NaN) {
            return "";
        }

        if (x < 18) {
            return "You are NOT an adult!";
        }

        return "OK, your age corresponds the low.";
    }
});

app.filter('myFilterAge', ['ageService', function (ageService) {
    return function (x) {
        return ageService.check(x);
    };
}]);