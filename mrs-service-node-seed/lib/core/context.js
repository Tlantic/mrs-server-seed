var DB = require('couchbaselib');
var config = require('mrs-node-util').configuration.get();
var async = require('async');
var mrsLogging = require('mrs-node-logger').Logger;
var mrsMetric = require('mrs-node-logger').Metric;



function Context(){
  mrsMetric.init(config.metrics);
  mrsLogging.init(config.logging);
}

Context.prototype.load= function(cb){
  async.waterfall([
    function (callback) {
      loadModel(callback);
    },
    function (data, callback) {
      startDatabase(data, callback);
    }
  ], function (err, results) {
      cb(err, results);
    });
};

function startDatabase(data, callback){
  DB.initConnection(config.db.host);
  DB.getBucket('mrs', function(err, msg){
    if(err)
    {
      callback(err);
    }
    else{
      callback(null, msg);
    }
  });
}

function loadModel(callback){


  callback(null, true);
}


module.exports =  new Context();
