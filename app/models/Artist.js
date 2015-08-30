var mongoose = require('mongoose');

module.exports = mongoose.model('Artist', {
	name : {type : String, default: ''}
});