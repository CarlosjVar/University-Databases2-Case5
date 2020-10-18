import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Logger } from '../common';
import {DataController} from '../controllers/'
import {Cache} from '../common'
import Levels from './levels';

class Routes {

    public express: express.Application;
    public logger: Logger;

    // array to hold users
    users: any[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new Logger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        this.express.use('/levels', Levels);
        this.express.get('/test',(req,res,next)=>
        {
            let tags= ["tournament","shana","everyone"]
            DataController.getInstance().getArticles(tags)
        })
        

    
    }
}

export default new Routes().express;