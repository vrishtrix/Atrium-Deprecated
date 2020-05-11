const Hapi = require('@hapi/hapi');
const Login = require('../actions/loginAction.js')
const Register = require('../actions/RegisterAction.js')


const init = () => {
      const server = Hapi.server({
            port: 80,
            host: '0.0.0.0'
      });

      //For react, dont edit
      server.route({
            method: 'GET',
            path: '/{path}',
            handler: (request, h) => {
                  return [];
            }
      });

      //API routing for login
      server.route({
            method: 'GET',
            path: '/api/login',
            handler: (request, h) => {
                  
                  return (Login(request.params.email, request.params.password))
            }




      });
      //API routing for register
      server.route({
            method: 'GET',
            path: '/api/register',
            handler: (request, h) => {
                  
                  return (Register(request.params.email, request.params.password, request.params.firstname, request.params.lastname, request.params.phone))

            }
      });

      /*
      server.route({
            method: 'GET',
            path: '/api/___',
            handler: (request, h) => {
                  
            }
      });
      */
      server.start();
      console.log(`Server running on ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
      console.error(err);
      process.exit(1);
});

init();