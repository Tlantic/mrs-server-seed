var User = require('../models/user'),
	DB = require('couchbaselib');


exports.createUser = function (data, cb) {

	var user = new User(data);
	user.save(cb);
};

exports.getAll = function (cb) {
	
	DB.query('default', 'dev_user', 'by_type', function (err, result) {
		if (err){
			cb(err);
		}
		cb(null, result);
	});
};


exports.getAllByQuery = function (cb) {
	DB.getN1qlQuery('default', "SELECT * FROM bee where type='user'", function (err, result) {
		if (err) {
			cb(err);
		}
		cb(null, result);
	});
};


exports.getById = function(id, cb){
	User.findByKey(id,function(err, data){
		if (err) {
			cb(err);
		}
		cb(null, data);
	});
};