
import { Tedis, TedisPool } from "tedis";

class Cache {
  private static instance: Cache;
  public tedisCache : Tedis;

  private constructor() {
    this.tedisCache = new Tedis({
      port: 6379,
      host: "25.10.118.245"
    });
  }

  public static getInstance(): Cache {
      if (!Cache.instance) {
        Cache.instance = new Cache();
      }
      return Cache.instance;
  }

  public async redisGet(key: string){
    return (await this.tedisCache).get(`${key}`);
  }

  // Se podría meter a un try-catch para ver que esté funcionando
  public async redisSet(key: string, value: string){
    (await this.tedisCache).set(key, value);
  }

}

export default Cache;