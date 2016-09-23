var app = angular.module('app', ['ngRoute', 'ngFileUpload']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'navController'
    })
    .when('/register', {
      templateUrl: '/partials/register.html',
      controller: 'userController'
    })
    .when('/login', {
      templateUrl: '/partials/login.html',
      controller: 'navController'
    })
    .when('/posts', {
      templateUrl: '/partials/posts.html',
      controller: 'postsController'
    })
    .when('/edit-profile', {
      templateUrl: '/partials/editprofile.html',
      controller: 'editProfileController'
    })
    .when('/logout', {
      templateUrl: '/partials/logout.html',
      // controller: 'editProfileController'
    })
    .otherwise({
      redirectTo: '/',
      controller: 'navController'
    })
});
