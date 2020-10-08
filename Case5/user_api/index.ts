import App from './app';
import * as http from 'http'
import { Logger } from './logger/logger'

const port = 3070;
const logger = new Logger();

  App.set('port', port);
  const server = http.createServer(App);
  server.listen(port);

server.on('listening', function(): void {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info(`Listening on ${bind}`);
 });

module.exports = App;