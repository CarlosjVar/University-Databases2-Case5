import * as express from 'express' 
import { Logger } from '../common' 
import Cache from '../common/cache/cache' 
import { DataController, SqlController } from '../controllers'

const logger = new Logger()
const cache = Cache.getInstance() 

const app = express() 
//Request principal
app.get('/get/:from/:to?', async (req, res) => {

  var getAsynchronous = async function(){
    logger.info(`level ranges`) 
    let result = Cache.getInstance().redisGet(req.params.from + req.params.to)
    if(result){
      res.json(result)
    }
    else
    {
      DataController.getInstance().getArticles(["granblue"]).then(articles=>
        {
          //Cache.getInstance().redisSet(req.params.from + req.params.to,articles)
          res.json(articles)
        })
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