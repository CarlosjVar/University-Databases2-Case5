"use strict";
exports.__esModule = true;
var tedis_1 = require("tedis");
var pool = new tedis_1.TedisPool({
    port: 6379,
    host: "25.10.118.245"
});
var tedis = pool.getTedis();
exports["default"] = tedis;
/*
const redisClient = redis.createClient(6379, process.env.REDIS_SERVER)
redisClient.on('error', (err) => {
   console.log(`>>>> REDIS CLIENT ERROR: ${err}`)
})
console.log('Redis client', redisClient)

// Initialize session.
const redis_session = Session({
    resave: true,
    saveUninitialized: true,
    key: 'SID',
    secret: process.env.REDIS_SESSION_SECRET,
    store: new RedisStore({ client: redisClient })
 })
 

const RedisStore = connectRedis(Session) // from import connectRedis from 'connect-redis'


export class Cache {
    private static instance: Cache;
    private redisCache : RedisClient;

    private constructor() {
        this.redisClient = redis.createClient(6379, process.env.REDIS_SERVER);
        this.redisClient.on('error', (err) => {
            console.log(`>>>> REDIS CLIENT ERROR: ${err}`)
         })
     }

    public static getInstance(): Cache {
        if (!Cache.instance) {
            Cache.instance = new Cache();
        }
        return Cache.instance;
    }

    public redisGet( queryKey : string) {
        this.redisCache.get(queryKey, (err, res) => {
            return res
        });
    }
    
    public redisSet( queryKey : string, jsonRegister : string) {
        this.redisCache.set(queryKey, jsonRegister, redis.print)
    }
}
*/
