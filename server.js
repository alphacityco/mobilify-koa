process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app  = require('./src');
var port = process.env.PORT || 3000;

app.listen(port);
console.log('Koa listening on port ' + port);
