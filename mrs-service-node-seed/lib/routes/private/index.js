'use strict';
var Userctrl = require('../../controller/user.ctrl');

module.exports = function (r) {
	r.route('/user/create').post(Userctrl.createUser);	
};
