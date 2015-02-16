var mongoConfig = {
  uriString: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mobilify-koa-dev'
};

module.exports = mongoConfig;
