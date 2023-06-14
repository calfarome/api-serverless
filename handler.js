const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/index');

// App express como serverless
const server =  awsServerlessExpress.createServer(app);

// Funciones lamda
module.exports.handler = (event, context)=>{
  return awsServerlessExpress.proxy(server, event, context);
}
