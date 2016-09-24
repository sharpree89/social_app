var authController = require('../controllers/authcontroller.js');
var profileController = require('../controllers/profilecontroller.js');
var postsController = require('../controllers/postscontroller.js');

module.exports = function(app) {

  //Authentication//
  app.post('/register', authController.register);
  app.post('/login', authController.login);

  //Profile//
  app.post('/profile/edit-photo', multiPartMiddleware, profileController.editPhoto);
  app.post('/profile/edit-username', profileController.editUsername);
  app.post('/profile/edit-bio', profileController.editBio);

  //Posts//
  app.post('/posts', postsController.sendPost);
  app.get('/get-posts', postsController.getPosts);
}
