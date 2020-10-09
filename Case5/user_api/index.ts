import App from './app';
import * as http from 'http';
import { Logger } from './logger/logger';

const port = 3070;
const logger = new Logger();
// Database connections

var Connection = require('tedious').Connection;
var Request = require('tedious').Request
var TYPES = require('tedious').TYPES;
var config = {
  server: 'host.docker.internal',
    port: Number(process.env.PORT),
  authentication: {
      type: 'default',
      options: {
          userName: 'User',
          password: '1234'
      }
  },
    dialect: 'mssql',
  options: {
      database: 'Caso5BD2',
      encrypt: false,
  }
};
var connection = new Connection(config);

connection.on('connect', function(err){
    if(err)
    {
        logger.error(err)
    }
    else {
        logger.info("Conectado a MSSQL!")
    }
  // connection.executeStatement()
})




    App.set('port', port);
  const server = http.createServer(App);
  server.listen(port);

server.on('listening', function(): void {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info(`Listening on ${bind}`);
 });

module.exports = App;