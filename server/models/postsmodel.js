var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({

  user: String,
  userId: String,
  userImage: String,
  post: String,
  date: {type: Date, default: Date.now}

})

mongoose.model('Post', postSchema);
