var connect = require('connect')
  , http = require('http');

connect()
  .use(connect.static(__dirname + '/public'))
  .listen(3000);