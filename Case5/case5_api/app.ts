import * as express from 'express' 
import * as bodyParser from 'body-parser' 
import { Logger, Constants } from './common'
import Routes from './routes/routes' 

class App {

    public express: express.Application 
    public logger: Logger 

    // array to hold users
    users: any[] 

    constructor() {
        this.express = express() 
        this.logger = new Logger()
        this.middleware() 
        this.routes() 

    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json()) 
        this.express.use(bodyParser.urlencoded({ extended: false })) 
    }

    private routes(): void {

        this.express.get('/', (req,res,next) => {
            res.send(Constants.WELCOME_MESSAGE) 
        }) 

        // user route
        this.express.use('/api', Routes) 

        // handle undefined routes
        this.express.use('*', (req,res,next) => {
            res.send(Constants.WRONG_ROUTE_MESSAGE) 
        }) 

    }
}

export default new App().express 