var _ = require("lodash"),
    DB = require('couchbaselib'),
    internals = {
        db:{
            bucketName:'default'
        }
    };

function User (data){
    if(!data.id)
        data.id = internals.createKey(data.email);
    this.data = this.sanitize(data);
    return;
};

exports = module.exports = User;

User.prototype.data = {};

User.prototype.get = function (name) {
    return this.data[name];
};

User.prototype.set = function (name, value) {
    this.data[name] = value;
};

User.prototype.sanitize = function (data) {
    data = data || {};
    return _.pick(_.defaults(data, schema), _.keys(schema)); 
};

internals.createKey = function(email){
    return 'user::'+email;
};
	
var schema = {
        id: null,
        name: null,
        password: null,
        email:null,
        type: 'user'
};

User.findByKey = function(key, cb){
    DB.get(internals.db.bucketName, key, function(err, result) {
	  if (err) 
            cb(err);
	   
    	cb(null, result);
    });
};

User.prototype.save = function(cb){     
	DB.insert(internals.db.bucketName, this.data.id, this.data, function(err, result) {
	  if (err) 
            cb(err);
	   
    	cb(null, result);
    }, true);
};

User.prototype.update = function(cb){     
	DB.update(internals.db.bucketName, this.data.id, this.data, function(err, result) {
	  if (err) 
            cb(err);

    	cb(null, result);
    }, true);
};

User.prototype.remove = function(cb){     
	DB.remove(internals.db.bucketName, this.data.id, function(err, result) {
	  if (err) 
            cb(err);
	   
    	cb(null, result);
    }, true);
};