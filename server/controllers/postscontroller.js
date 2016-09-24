var mongoose = require('mongoose');
var Post = mongoose.model('Post');
// var User = mongoose.model('User');

module.exports = {

  sendPost: function(req, res) {

    var post = new Post(req.body);

    post.save();

    Post.find({})
      .sort({date: -1}).exec(function(err, allPosts) {
      if(err) {
        console.log('********** something went wrong finding all posts **********');
      }
      else{
        res.json(allPosts);
      }
    });
  },

  getPosts: function(req, res) {
    Post.find({})
      .sort({date: -1}).exec(function(err, allPosts) {
        if(err) {
          res.error(err);
        }
        else{
          res.json(allPosts);
        }
      })
  }
}
