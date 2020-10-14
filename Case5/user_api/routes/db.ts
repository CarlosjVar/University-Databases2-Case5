import * as express from 'express';
import { Logger } from '../logger/logger';
import tediousController from '../configs/tediousConnection'
import client from '../configs/elasticConnection';
import{MongooseController} from '../configs/mongooseConnection'

// db setup
const app = express();
const logger = new Logger()

// prueba
app.use('/getHashtag',(req,res,next)=>{
    logger.info('databases route');
    tediousController.connection.on('connect', function(err) {
        if(err){
            console.log(err)
        }
    });
    let result = tediousController.getData()
    res.send("hagamos la morición");
})

// Prueba conexión elastic
app.get('/elastictest',((req, res, next) => {

    client.search({
        index:'palabras'
    },(error,response,status) =>
    {
        if(error){
            logger.error(error)
        }
        else
        {
            console.log("--- Response ---");
            console.log(response);
            console.log("--- Hits ---");
            response.hits.hits.forEach(function(hit){
                console.log(hit);
            })
        }
    }
    )
}))



app.get('/populate',(req,res,next)=>
{
    for(let i = 0; i<18;i++)
    {
    MongooseController.getInstance().populateDB();
    }
   res.send("Base cargada")
})





export default app;