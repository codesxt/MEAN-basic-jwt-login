var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/note-saver', function(){
	console.log('MongoDB connected.');
});
module.exports = mongoose;
