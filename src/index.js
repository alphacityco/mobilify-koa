var koa        = require('koa');
var app        = koa();
var bodyParser = require('koa-body-parser');
var logger     = require('koa-logger');
var router     = require('koa-router');

var db = require('./db');

app.use(logger());
app.use(bodyParser());
require('koa-qs')(app);
app.use(router(app));

require('./routes')(app, db);

module.exports = app;
