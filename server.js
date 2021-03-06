// Modules ======================================
var express 	   = require('express');
var app			   = express();
var bodyParser 	   = require('body-parser');
var methodOverride = require('method-override');
var mongoose	   = require('mongoose');

// Config ========================================

// config files
var db = require('./config/db');

//set port
var port = process.env.PORT || 8080;

// connect mongoDB database (we'll do this later)
mongoose.connect(db.url, function(err, db) {
	if(!err) console.log("We are connected");

});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log("yay!");
});

// get all data/stuff of the body (POST) parameters
// parse application/json 

//Express configuration

app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.json({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
var routes = require('./app/routes'); // configure our routes

routes(app);

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;  