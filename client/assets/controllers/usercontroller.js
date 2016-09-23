app.controller('userController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  //this is sending the info the newUser submitted, to an end-point
  $scope.registerUser = function(newUser) {
    console.log($scope.newUser);
    console.log('********** in userController registerUser function **********');

    $http.post('/register', $scope.newUser).success(function(response) {
      $location.url('/posts');
    }).error(function(error) {
      console.log(error);
    })

  }
}]);
