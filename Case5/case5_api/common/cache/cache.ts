
import { Tedis } from "tedis" 
import { Constants } from '../index'

export class Cache {
  private static instance: Cache 
  public tedisCache : Tedis 

  private constructor() {
    this.tedisCache = new Tedis({
      port: Constants.CACHE_PORT,
      host: Constants.CACHE_HOST
    }) 
  }

  public static getInstance(): Cache {
      if (!Cache.instance) {
        Cache.instance = new Cache() 
      }
      return Cache.instance 
  }

  public async redisGet(key: string){
    let exists = await this.tedisCache.exists(key);
    if(exists==0)
    {
      console.log("No existe");
      
      return null;
    }
    else
    {
      return (await this.tedisCache).get(`${key}`).then(value=>{return value});
    }
    
  }


  // Se podría meter a un try-catch para ver que esté funcionando
  public async redisSet(key: string, value: string){
    (await this.tedisCache).set(key, value) 
    this.tedisCache.pexpire(key,6000)
  }

}

export default Cache 