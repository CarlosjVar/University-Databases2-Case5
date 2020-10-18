import * as express from 'express' 
import { Logger } from '../common' 
import Cache from '../common/cache/cache' 
import { DataController, SqlController } from '../controllers'

const logger = new Logger()
const cache = Cache.getInstance() 

const app = express() 

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
        })
    }
  }

  getAsynchronous().then(val=>res.send(val))
  
  }
) 

app.get('/test', async (req, res) => {
  let asd = []
  SqlController.getInstance().getArticles(["catalina", "granblue", "sign"])
})

export default app 