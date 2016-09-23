app.controller('editProfileController', ['Upload', '$scope', '$http', '$location', function(Upload, $scope, $http, $location) {

  $scope.user = JSON.parse(localStorage['User-Data']) || undefined;

  $scope.$watch(function() {
    return $scope.file;
  }, function() {
    $scope.upload($scope.file);
  });

  $scope.upload = function(file) {
    if(file) {
      Upload.upload({
        url: '/profile/edit-photo',
        method: 'POST',
        data: {userId: $scope.user._id},
        file: file
      }).progress(function(evt) {
          console.log('firing');
      }).success(function(data) {

      }).error(function(error) {
          console.log(error);
      })
    }
  };

  $scope.editUsername = function() {

    var request = {
      userId: $scope.user._id,
      username: $scope.user.username
    }

    $http.post('/profile/edit-username', request).success(function() {
      console.log('********** successfully updated username');
    }).error(function(error) {
      console.log('********** something went wrong with updating username **********');
    })
  };

  $scope.editBio = function() {

    var request = {

      userId: $scope.user._id,
      bio: $scope.user.bio
    }

  $http.post('/profile/edit-bio', request).success(function() {
    console.log('********** successfully updated bio');
  }).error(function(error) {
    console.log('********** something went wrong with updating bio **********');
  })
};
}]);
