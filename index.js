// Sample Hapi configuration file
'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: function handler(request, reply) {
    reply('Hello world!', request);
  }
});

server.start();

