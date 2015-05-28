'use strict';
var Userctrl = require('../../controller/user.ctrl');

/**
 * @api {get} /user/all Request Users
 * @apiName all
 * @apiGroup Public
 * @apiVersion 0.0.1
 * @apiExample Example usage:
 * curl -i /user/all
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *	{
 *	"key": "user::andreasdsadasdassapinht22o@mail.com",
 *	"value": {
 * 	"id": "user::andreasdsadasdassapinht22o@mail.com",
 *	"name": "andre",
 *	"password": "1234",
 *	"email": "andreasdsadasdassapinht22o@mail.com",
 * 	"type": "user"
 *	},
 *	"id": "user::andreasdsadasdassapinht22o@mail.com"
 *	}
 * ]
 *
 */
module.exports = function (r) {
	r.route('/user/all').get(Userctrl.getAll);
};
