var UserSrv = require('../service/user.service')

exports.createUser = function (data, cb) {
	UserSrv.createUser(data, cb);
};

exports.getAll = function (cb) {
	UserSrv.getAll(cb);
};


exports.getAllByQuery = function (cb) {
	UserSrv.getAllByQuery(cb);
};