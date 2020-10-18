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
  let asd = []
  let result = await SqlController.getInstance().getArticles(["catalina", "granblue", "sign"], function(err, results) {
    if(err){
      console.log(err);
    }
  }).then((results) =>{
      return results;
  });
  console.log("Ultimo print =================================================");
  
  console.log(result);
  
  //logger.info(variable)
  res.send("Hola")
})

export default app 