
import { Tedis } from "tedis" 
import { Constants } from '../index'
import { Logger } from "../logger/logger"

export class Cache {
  private static instance: Cache 
  public tedisCache : Tedis 
  private logger : Logger

  private constructor() {
    this.tedisCache = new Tedis({
      port: Constants.CACHE_PORT,
      host: Constants.CACHE_HOST
    }) 
    this.logger = new Logger()
  }

  public static getInstance(): Cache {
      if (!Cache.instance) {
        Cache.instance = new Cache() 
      }
      return Cache.instance 
  }

  public async redisGet(key: string){

    let promise = new Promise((resolve,reject)=>
    {
      this.tedisCache.exists(key).then(response=>{
        if(response == 0)
        {
          this.logger.info(Constants.NO_CACHE_RESULT)
          resolve(null);
        }
        else
        {
          resolve ((this.tedisCache).get(`${key}`).then(value=>{
            this.logger.info(Constants.SUCCESSFULL_CACHE_SEARCH)
            return JSON.parse(String(value))
          }));
        }
      });
     
    })

    return promise
  }


  // Se podría meter a un try-catch para ver que esté funcionando
  public async redisSet(key: string, value){
    (await this.tedisCache).set(key, value) 
    this.tedisCache.pexpire(key,Constants.CACHE_EXPIRE_TIME)
  }

}

export default Cache 