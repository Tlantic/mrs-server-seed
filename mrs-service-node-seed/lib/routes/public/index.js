'use strict';
var MetricsBss = require('../../metrics/metrics.controller');

module.exports = function (r) {// jshint ignore:line
    r.route('/metrics').get(MetricsBss.getData);
    r.route('/externalService').get(MetricsBss.callExternalService);
};
