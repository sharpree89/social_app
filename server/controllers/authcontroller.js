var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

  register: function(req, res) {
    var user = new User({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
    user.save(function(err) {
      console.log('********** registered the new user **********');
      res.json(req.body);
    });
  },

  login: function(req, res) {
    console.log('********** in authController login function **********');
    console.log(req.body.email);
    User.findOne({email: req.body.email}, function(err, results) {
      if(!results) {
        console.log('********** something went wrong in login **********');
      }
      if(!err && results){
        var userData = results;
        console.log('********** logged in the user **********', results)
        res.json({
          email: req.body.email,
          _id: userData._id,
          username: userData.username,
          image: userData.image
        });
      }
    });
  }
}
