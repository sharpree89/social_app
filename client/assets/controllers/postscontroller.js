app.controller('postsController', ['$scope', '$http', '$interval',
                          function( $scope,   $http,   $interval) {

     console.log('********** you are in the postsController **********');

     if(localStorage['User-Data'] !== undefined) {
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
           console.log(response);
           $scope.posts = response;
         }).error(function(error) {
           console.log('********** something went wrong in postsController sendPost function **********');
         });
      }
    };

     $scope.getPosts = function(initial) {

       $http.get('/get-posts').success(function(response) {
         if(initial) {
           $scope.posts = response;
         }
         else{
           if(response.length > $scope.posts.length){

           }
           $scope.incomingPosts = response;
         }
       })
     };

     $interval(function(){

       $scope.getPosts(false);

       if($scope.incomingPosts) {
         $scope.difference = $scope.incomingPosts.length - $scope.posts.length;
       }

       console.log('this is working');

     }, 5000);

     $scope.setNewPosts = function() {
       $scope.posts = angular.copy($scope.incomingPosts);
       $scope.incomingPosts = undefined;
     }

     $scope.getPosts(true);































}]);
