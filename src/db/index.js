var co     = require('co');
var monk   = require('monk');
var comonk = require('co-monk');

var config = require('../config');

// connect with mongodb
var db = monk(config.db.uriString);

// collections
var articles = comonk(db.get('articles'));

var mongoFacade = {
  db: db,
  articles: articles,
  config: config.db
};

// var seed = require('./seed')(mongoFacade);
// seed.apply();

module.exports = mongoFacade;
