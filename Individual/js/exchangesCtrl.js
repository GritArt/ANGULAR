app.controller('exchangesCtrl', function($scope) {
    $scope.exchanges = [
        { "title": "Dollars", "price": 18, "image": "resources/images/exchanges-photo/8d23402d1077e00cad2ca0b7f9ba8d03.jpg" },
        { "title": "Euro", "price": 20, "image": "resources/images/exchanges-photo/3af9a04340a7354cd70171912586dc4e.jpg" },
       
        { "title": "Ruble", "price": 0.24, "image": "resources/images/exchanges-photo/9eb06d7206761c87dc65f14b8577ff66.jpg" }
       
        
    ];

    $scope.inputLogin = "";
    $scope.inputPass = "";

    $scope.login = "admin";
    $scope.password = "admin";
    $scope.isSignIn = false;
    $scope.editing = false;


    $scope.signIn = function() {
        if ($scope.inputLogin === $scope.login) {
            if ($scope.inputPass == $scope.password) {
                $scope.isSignIn = true;
                document.getElementById('myModal1').style.display = "none"
            }
        }
    };

    $scope.removeProduct = function(itemTitle) {
        const index = $scope.exchanges.findIndex(x => x.title === itemTitle);

        $scope.exchanges.splice(index, 1);

        console.log(index);
    }


    

    $scope.myReverseBy = false;
    $scope.reverseOrder = function() {
        $scope.myReverseBy = !($scope.myReverseBy);
    }

    
});