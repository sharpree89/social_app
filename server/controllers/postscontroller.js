var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var User = mongoose.model('User');

module.exports = {

  sendPost: function(req, res) {
    var post = new Post(req.body);
    post.save(function(err) {
      if(err) {
        console.log('********** something went wrong in save post **********');
      }
      else{
        console.log('********** your post has been saved in the db **********' + req.body.post);
      }
    });

    Post.find({})
      .sort({date: -1}).exec(function(err, allPosts) {
      if(err) {
        console.log('********** something went wrong retrieving all posts **********');
      }
      else{
        console.log('********** here are all posts: ' + allPosts + '**********');
      }
    });
  }


  // getPosts: function(req, res) {
  //   Post.find({})
  //     .sort({date: -1}).exec(function(err, allPosts) {
  //       if(err) {
  //         res.error(err);
  //       }
  //       else{
  //         res.json(allPosts);
  //       }
  //     })
  // }
}
