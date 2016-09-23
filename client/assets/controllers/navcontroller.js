app.controller('navController', ['$scope', '$http', '$location', function($scope, $http, $location) {

  if(localStorage['User-Data']) {
    $scope.loggedIn = true;
  }
  else{
    $scope.loggedIn = false
  }

  $scope.loginUser = function() {
    console.log($scope.login);
    console.log('********** in navController loginUser function **********');
    $http.post('/login', $scope.login).success(function(response) {
      localStorage.setItem('User-Data', JSON.stringify(response));
      $scope.loggedIn = true;
      $location.url('/posts');
    }).error(function(error) {
        console.log('********** something went wrong in navController loginUser function **********');
    })
  }

  $scope.logOut = function() {

    localStorage.clear();
    $scope.loggedIn = false;
    console.log('********** the user has been logged out **********')
    $location.url('/logout');
  }
}]);
