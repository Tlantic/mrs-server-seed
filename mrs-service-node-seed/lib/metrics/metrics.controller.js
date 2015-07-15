'use strict';

var httpResponse = require('mrs-node-util').httpResponse;
var MetricsBss = require('./metrics.business');


exports.getData = function (req, res, next) {
    MetricsBss.getData(function(err, data){
        if (err) {
            return httpResponse.error(err, res);
        } else {
            return httpResponse.success(data, res);
        }
    });
};

exports.callExternalService = function (req, res, next) {
    MetricsBss.callExternalService(function(err, data){
        if (err) {
            return httpResponse.error(err, res);
        } else {
            return httpResponse.success(data, res);
        }
    });
};