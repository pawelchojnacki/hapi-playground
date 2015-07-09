// Sample Hapi configuration file
let Hapi = require('hapi');

let server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
})

server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => {
    reply('Hello world!', request);
  }
})

server.route({
  method: 'GET',
  path: '/hello-{name}',
  handler: (request, reply) => {
    reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
  }
})

server.start(
  () => {
    console.log('Server running at:', server.info.uri);
  }
);
