var mongoose = require('mongoose');
var User = mongoose.model('User');
var fs = require('fs-extra');
var path = require('path');

module.exports = {

  editPhoto: function(req, res) {
    var file = req.files.file;
    var userId = req.body.userId;

    console.log('User ' + userId + ' is submitting ', file);

    var uploadDate = new Date();

    var tempPath = file.path;
    var targetPath = path.join(__dirname, '../../uploads/' + userId + uploadDate + file.name);
    var savePath = '/uploads/' + userId + uploadDate + file.name;

    fs.rename(tempPath, targetPath, function(err) {

      if(err) {
        console.log(err);
      }
      else{
        User.findById(userId, function(err, userData) {
          var user = userData;
          user.image = savePath;
          user.save(function(err) {
            if(err) {
              console.log('********** failed to save image **********');
              res.json({status: 500});
              //500 is an error code
            }
            else{
              console.log('********** successfully saved image **********');
              res.json({status: 200});
              //200 is a success code that will overwrite the 500 error from popping up on success
            }
          })
        })
      }
    })
  },

  editUsername: function(req, res) {

    var username = req.body.username;
    var userId = req.body.userId;

    User.findById(userId, function(err, userData) {

      var user = userData;
      user.username = username;

      user.save(function(err) {
        if(err) {
          console.log('********** failed to save username **********');
          res.json({status: 500});
          //500 is an error code
        }
        else{
          console.log('********** successfully saved username **********');
          res.json({status: 200});
          //200 is a success code that will overwrite the 500 error from popping up on success
        }
      })
    });
  },

  editBio: function(req, res) {

    var bio = req.body.bio;
    var userId = req.body.userId;

    User.findById(userId, function(err, userData) {

      var user = userData;
      user.bio = bio;

      user.save(function(err) {
        if(err) {
          console.log('********** failed to save bio **********');
          res.json({status: 500});
          //500 is an error code
        }
        else{
          console.log('********** successfully saved bio **********');
          res.json({status: 200});
          //200 is a success code that will overwrite the 500 error from popping up on success
        }
      })
    });
  }

}
