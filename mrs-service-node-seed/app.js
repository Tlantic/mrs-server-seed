var express = require('express'),
  path = require('path'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  util =  require('mrs-node-util').util,
  config = require('mrs-node-util').configuration.get(),
  app = express();


var authMiddleware = require('mrs-node-util').authMiddleware;
var mrsLogging = require('mrs-node-logger').Logger;
var mrsMetric = require('mrs-node-logger').Metric;


authMiddleware.init(config.core, config.serviceName, config.auth.secret, config.auth.algorithm);
var checkAuthMiddleware = authMiddleware.check;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/*
  ROUTES
*/
var router = express.Router();

function bootstrapRoutes() {
  util.recursiveNavigation(path.resolve(process.cwd(), 'lib', 'routes', 'public'), null, function (path) {
    require(path)(router, checkAuthMiddleware);
  });
  util.recursiveNavigation(path.resolve(process.cwd(), 'lib', 'routes', 'private'), null, function (path) {
    require(path)(router, checkAuthMiddleware);
  });
}

bootstrapRoutes();

/*
 UTILS
 */


app.use(function (req, res, next) {
  req._xRequestId = mrsMetric.getRequestId();
  res.setHeader('X-Request-Id', req._xRequestId);

  var oneof = false;
  if (req.headers.origin) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    oneof = true;
  }
  if (req.headers['access-control-request-method']) {
    res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
    oneof = true;
  }
  if (req.headers['access-control-request-headers']) {
    res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
    oneof = true;
  }
  if (oneof) {
    res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
  }

  // intercept OPTIONS method
  if (oneof && req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }


});

app.use(mrsMetric.specialMdd);
app.use(mrsMetric.middleware);

app.use('/' + config.serviceName, router);

app.use(mrsMetric.errorMiddleware);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    mrsLogging.error(err.message);
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  mrsLogging.error(err.message);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
