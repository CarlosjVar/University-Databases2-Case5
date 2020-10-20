import * as express from 'express' 
import e = require('express')
import { Logger } from '../common' 
import Cache from '../common/cache/cache' 
import { DataController, SqlController } from '../controllers'
import {elasticController} from '../controllers'

const logger = new Logger()
const cache = Cache.getInstance() 

const app = express() 
//Request principal
app.get('/get/:from/:to?', async (req, res) => {

  
    logger.info(`level ranges => params: ${req.params.from} | ${req.params.to}`) 
    DataController.getInstance().getArticles(req.params.from,req.params.to).then(articles=>
    {
      res.json(articles)
    })
  }
)



export default app 