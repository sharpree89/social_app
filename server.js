var express = require("express")
    path = require("path")
    bp = require("body-parser")
    app = express()
    multiPart = require("connect-multiparty")
    multiPartMiddleware = multiPart();

app.use(bp.json());
app.use(multiPartMiddleware);
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(express.static(path.join(__dirname, './node_modules')));
app.use(express.static(path.join(__dirname, '.client/uploads')));

require('./server/config/mongoose.js');
require(__dirname + '/server/config/routes.js')(app);

//Server-Side Controllers//
authController = require('./server/controllers/authcontroller.js');
profileController = require('./server/controllers/profilecontroller.js');
postsController = require('./server/controllers/postscontroller.js');

app.get('/', function(req, res) {
  res.sendfile('./client/fixedview.html');
});

var server = app.listen(8000, function() {
  console.log("Listening for port 8000");
});
