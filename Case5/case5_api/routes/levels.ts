import * as express from 'express' 
import { Logger } from '../common' 
import Cache from '../common/cache/cache' 
import { SqlController } from '../controllers'

const logger = new Logger()
const cache = Cache.getInstance() 

const app = express() 

app.get('/get/:from/:to?', async (req, res) => {

  var getAsynchronous = async function(){
    logger.info(`level ranges`) 
    if(req.params.to){
      return cache.redisGet(req.params.to) 
    }
    else{ 
      return cache.redisGet(req.params.from) 
    }    
  }

  getAsynchronous().then(val=>res.send(val))
  
  }
) 

app.get('/test', async (req, res) => {
  let variable = await SqlController.getInstance().getArticles(["catalina", "granblue", "sign"], function(results) {
    console.log("Resultado de llamada: "+results);
    
  });
  //logger.info(variable)
  res.send("Hola")
})

export default app 