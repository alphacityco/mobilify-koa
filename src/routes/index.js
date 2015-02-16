function routes(app, db) {
  var articles = require('./articles')(db);

  app.get('/articles', articles.index);
}

module.exports = routes;
