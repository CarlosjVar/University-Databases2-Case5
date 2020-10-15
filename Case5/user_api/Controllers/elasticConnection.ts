import {Logger} from '../logger/logger'
var elasticsearch=require('elasticsearch');
export class elasticController{
    private client:any;
    private log: Logger;
    private static instance:elasticController
    constructor(){
        this.log = new Logger();
        this.client = new elasticsearch.Client( {
            host:'25.10.118.245:9200'
        });
    }
    public static getInstance():elasticController
    {
        if(!this.instance)
        {
            this.instance = new elasticController();
        }
        return this.instance
    }
    public getTagCount()
    {
        this.client.search({
        size:0,
        index: 'palabras',
        body:
        {
            "aggs":{
            "cuenta":{
              terms : { "field" : "palabra.keyword",
              "size": 10000 },
                    }
            }
        }
        }).then((resp,error)=>{
            if(error)
            {
                this.log.error(error)
            }
            this.log.info(JSON.stringify(resp,null,4))
        })
    }
}
