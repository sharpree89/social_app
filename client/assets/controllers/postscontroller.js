app.controller('postsController', ['$scope', '$http', '$interval',
                          function( $scope,   $http,   $interval) {

     console.log('********** you are in the postsController **********');

     if(localStorage['User-Data'] != undefined) {
       $scope.user = JSON.parse(localStorage['User-Data']);
       console.log($scope.user);
     }

     $scope.sendPost = function(event) {
       if(event.which === 13) {
         var request = {
           user: $scope.user.username || $scope.user.email,
           userId: $scope.user._id,
           userImage: $scope.user.image,
           post: $scope.post
         }

         console.log('**********' + request.post + '**********');

         $http.post('/posts', request).success(function(response) {
           console.log('********** sending post to server **********');
         }).error(function(error) {
           console.log('********** something went wrong in postsController sendPost function **********');
         });
      }
    };

    //  $scope.getPosts = function(initial) {
     //
    //    $http.get('/get').success(function(response) {
    //      if(initial) {
    //        $scope.posts = response;
    //      }
    //      else{
    //        $scope.incomingPosts = response;
    //      }
    //    })
    //  };
    //  //Init//
    //  getPosts(true);
}]);
