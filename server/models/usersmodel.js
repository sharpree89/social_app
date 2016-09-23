var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({

  first_name: { type : String, required: true },
  last_name:  { type : String, required: true },
  email:      { type : String, required: true, unique: true },
  password:   { type : String, required: true },
  image:    String,
  username: String,
  bio:      String

})

mongoose.model('User', userSchema);
