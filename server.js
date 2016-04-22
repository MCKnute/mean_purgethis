var express = require('express');
var path = require('path');
var http = require('http');

var app = express();
var bodyParser = require('body-parser'); 

app.use(express.static(path.join(__dirname, "./client/static")));
app.use(bodyParser.json());

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');

routes_setter(app);

var port = 6700;

app.listen(port, function() {
  console.log("Ask away on port: ", port);
});

