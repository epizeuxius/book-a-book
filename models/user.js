var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true,
		unique:true
	},
	name: {
		type: String,
	},
	password: {
		type: String
	},
	email: {
		type: String,
		unique: true
	},
	da_Id: {
		type: String,
		unique: true
	},
	user_rating: {
		type: Number,
	},
	mobile_no: {
		type: String
	},
	token: {
		type: String
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}

function makeid(n){
  var tt="";
  var stringg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  for(var i=0;i<n;i++){
    tt += stringg.charAt(Math.floor(Math.random()*stringg.length));
  }
  return tt;
};

// var = makid(4)+
module.exports.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};
