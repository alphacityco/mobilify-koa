var koa        = require('koa');
var app        = koa();
var bodyParser = require('koa-body-parser');
var logger     = require('koa-logger');
var router     = require('koa-router');

var config = require('./config');
var db     = require('./db');

app.use(logger());
app.use(bodyParser());
require('koa-qs')(app);
app.use(router(app));

require('./routes')(app, db);

app.listen(config.app.port, function(){
  console.log('Koa listening on port ' + config.app.port);
});
