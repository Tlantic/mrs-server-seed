'use strict';
var Userctrl = require('../../controller/user.ctrl');
/**
 * @api {post} /user/create Create User.
 * @apiVersion 0.0.1
 * @apiName ByPhoneNumber
 * @apiGroup Private
 *
 * @apiParam {String} name Name of User 
 * @apiParam {String} email Email of User 
 * 
 * @apiExample Example usage:
 * curl -i http://localhost:8000/seed/user/create -d { "name": String, "email": String }
 * 
 * @apiSampleRequest /seed/user/create
 * 
 * @apiSuccess {Object} User  User data.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   	"id": "user::andre@mail.com",
 *   	"name": "Andre",
 *   	"password": null,
 *   	"email": "andre@mail.com",
 *   	"type": "user"
 * }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
module.exports = function (r) {
	r.route('/user/create').post(Userctrl.createUser);	
};
