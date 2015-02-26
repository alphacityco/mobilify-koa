var app    = require('./src');
var config = require('./src/config');

app.listen(config.app.port, function(){
  console.log('Koa listening on port ' + config.app.port);
});
