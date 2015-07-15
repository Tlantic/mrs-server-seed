'use strict';

var async = require('async');
var _ = require('lodash');
var couchbaselib = require('couchbaselib');
var util = require('mrs-node-util').util;
var httpResponse = require('mrs-node-util').httpResponse;
var config = require('mrs-node-util').configuration.get();
var mrsEnvironment = require('mrs-node-util').environment;

var SUB_MODULE = 'metrics';

mrsEnvironment.init(config.router.ip, config.core.host, config.core.port, config.serviceName);

exports.getData = function (cb) {
    async.waterfall([
        function (callback) {
            callback(config);
        }
    ], function (err, results) {
        cb(err, results);
    });
};


exports.callExternalService = function (cb) {
    async.waterfall([
        function (callback) {
            mrsEnvironment.requestApi({
                organization: 'tlantic',
                application: 'customer',
                module: 'authentication',
                path: '/users',
                verb: 'GET',
            }, callback);
        },
        function(data, callback){
            callback(null, data);
        }
    ], function (err, results) {
        cb(err, results);
    });

};