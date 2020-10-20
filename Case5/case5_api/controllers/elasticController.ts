import {Logger, Constants} from '../common'
var elasticsearch=require('elasticsearch');
const NIVEL_MAX = 10
/**
 * Class in charge of handling all the request to the elasticsearch index
 */
export class elasticController{
    private client:any 
    private log: Logger 
    private static instance:elasticController
    private constructor(){
        this.log = new Logger() 
        this.client = new elasticsearch.Client( {
            host:Constants.ELASTIC_HOST
        }) 
    }
    /**
   * Returns an instance of the class
   */
    public static getInstance():elasticController
    {
        if(!this.instance)
        {
            this.instance = new elasticController() 
        }
        return this.instance
    }
    /**
     * Asks elastic' index for the tags included in the level requested
     */
    public getTags(fromLevel : number, toLevel : number)
    {   
        
        let promise = new Promise((resolve, reject)=>
        {
            let tags 
            this.client.search({
            size:0,
            index: 'palabras',
            body:{
                "aggs": {          
                    "palabras_count": {
                        "terms": {
                            "field": "palabra.keyword",
                            "size" : 20
                        },
                        "aggs" : {
                            "hashtags" : {
                                "bucket_selector" : {
                                    "buckets_path": {
                                        "cuenta": "_count"
                                    },
                                    "script" :{
                                        "source": "params.cuenta>10"
                                    }
                                }
                            }
                        }
                    },
                    "max_palabra": {
                        "max_bucket": {
                            "buckets_path": "palabras_count>_count" 
                        }
                    },
                    "min_palabra": {
                        "min_bucket": {
                            "buckets_path": "palabras_count>_count"
                        }               
                    }       
                }  
            }
            }).then((resp,error)=>{
                if(error)
                {
                    this.log.error(error)
                }
                tags = resp
                let maxCount  = tags.aggregations.max_palabra.value+1;
                let minCount  = tags.aggregations.min_palabra.value;
                let invertedFrom = 11 - fromLevel
                let invertetTo = 11 - toLevel
                let toCount = (invertedFrom * ((maxCount - minCount) / 10)) + minCount
                let fromCount   = ((invertetTo - 1)   * ((maxCount - minCount) / 10)) + minCount
                
                this.client.search({
                    size:0,
                    index: 'palabras',
                    body:{
                        "aggs": {          
                            "palabras_count": {
                                "terms": {
                                    "field": "palabra.keyword",
                                    "size" : 20
                                },
                                "aggs" : {
                                    "hashtags" : {
                                        "bucket_selector" : {
                                            "buckets_path": {
                                                "cuenta": "_count"
                                            },
                                            
                                            "script" :{
                                                "params": {
                                                    "from": fromCount,
                                                    "to"  : toCount
                                                  },
                                                "source": "params.cuenta>=params.from && params.cuenta<params.to"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }).then((resultados)=>
                {                         
                    this.log.info(resultados.aggregations.palabras_count.buckets)
                    resolve(resultados.aggregations.palabras_count.buckets)
                })
            })
        })

        return promise
    }
   
}
