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

  var getAsynchronous = async function(){
    logger.info(`level ranges`) 
    let result = DataController.getInstance().getArticles(req.params.from,req.params.to)
  }

  getAsynchronous().then(val=>res.send(val))
  
  }
)
app.get('/elastic',(req,res,next)=>
{
  elasticController.getInstance().getTagCount();
}) 



export default app 