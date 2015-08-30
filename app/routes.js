var Artist = require('./models/Artist');

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
			res.json(artist); // returns artists in JSON
		});
	});

	// route to handle creating goes here (app.post)
	// app.post('/api/artists', function(req, res) {
		
	// });
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests

	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); //load index,html
	})
};