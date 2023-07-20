const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/index');

// Creo mi app como  aws serverless
const server =  awsServerlessExpress.createServer(app);

// Función  lambda a mis funcione de api rest
module.exports.handler = (event, context)=>{
  return awsServerlessExpress.proxy(server, event, context);
}
