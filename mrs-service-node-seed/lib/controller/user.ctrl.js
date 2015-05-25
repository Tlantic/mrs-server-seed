var UserBss = require('../business/user.bss');

exports.createUser = function (req, res, next) {
	UserBss.createUser(req.body, function (err, result) {
		if (err)
			res.status(500).send(err);

		res.send(result);
	});

};

exports.getAll = function (req, res, next) {
	UserBss.getAll(function (err, data) {
		if (err)
			res.status(500).send(err);

		res.send(data);
	});

};