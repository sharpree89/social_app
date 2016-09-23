var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost/new_project');
require('../models/usersmodel.js');
require('../models/postsmodel.js');
