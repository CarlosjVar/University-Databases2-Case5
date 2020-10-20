import App from './app';
import * as http from 'http';
import { Logger, Constants } from './common';
import { SqlController } from './controllers'

const port = Constants.SERVER_PORT;
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