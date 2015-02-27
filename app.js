require('newrelic');

var app    = require('./src');
var config = require('./src/config');

var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {

  cluster.on('listening', function(worker, address) {
    console.log("A worker is now connected to " + address.address + ":" + address.port);
  });

  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('A worker died at: ' + worker.process.pid);
  });

} else {
  app.listen(config.app.port, function(){
    console.log('Koa listening on port ' + config.app.port);
  });
}


