var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema for login page
userSchema = new Schema( {
	
	unique_id: Number,
	username: String,
	email: String,
	password: String,
	passwordConf: String
}),
User = mongoose.model('User', userSchema);
module.exports = User;
