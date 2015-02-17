var appConfig = {
  env:  process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000
};

var dbConfig = {
  uriString: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mobilify-koa-dev'
};

var wordpressConfig = {
  apiUrl: 'http://apiedepagina.com/api'
};

var config = {
  app:       appConfig,
  db:        dbConfig,
  wordpress: wordpressConfig
};
module.exports = config;
