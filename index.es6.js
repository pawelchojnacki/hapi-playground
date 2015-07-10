// Sample Hapi configuration file
let Hapi = require('hapi');
let Good = require('good');

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
  path: '/hello-{name?}',
  handler: (request, reply) => {
    if (!request.params.name) {
      request.params.name = "user";
    }
    reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
  }
})

server.register(
  {
    register: Good,
    options: {
      reporters: [{
        reporter: require('good-console'),
        events: {
          response: '*',
          log: '*'
        }
      }]
    }
  },
  function onModuleLoadingError (err) {
    if (err) {
      throw err;
    }

    // the server will initialize on error
    server.start(
      () => {
        console.log('Server running at:', server.info.uri);
      }
    );
  }
);
