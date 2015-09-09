var mongoose = require('mongoose');
var test = require('./models/Artist')

var Artist = mongoose.model('Artist');

module.exports = function(app) {
	// server routes ===========================================================
    // handle things like api calls
    // authentication routes

    //sample api route
	app.get('/api/artists', function(req, res) {
		Artist.find(function(err, artists) {
			if (err) {
				res.send(err);
			}
			res.json(artists); // returns artists in JSON
		});
	});

	// route to handle creating goes here (app.post)
	app.post('/api/artists', function(req, res) {
		var artist = new Artist(req.body);
		artist.name = req.body.text;
		artist.save(function(err, artist) {
			if (err) return console.error(err);
			res.json(artist);
		})
	});

	//don't think either of these work. Need to learn
    app.delete('/api/artists/:id', function(req, res) {
    	Artist.remove({'_id': req.params.id}, function() {
    		res.send("fin");
    	})
    });
 
    // delete all artist, be careful :)
    app.delete('/api/artists', function(req, res) {
    	Artist.remove({}, function() {
    		res.send('everythang deleted');
    	})
    });

    // frontend routes =========================================================
    // route to handle all angular requests

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); //load index,html
	})
};