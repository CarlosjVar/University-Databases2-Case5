import {Logger} from '../common'
var elasticsearch=require('elasticsearch') 
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
            host:'25.10.118.245:9200'
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
    public getTagCount()
    {   let tags 
        this.client.search({
        size:0,
        index: 'palabras',
        body:{
        "aggs":
        {   
            "aggs":{
                "cuenta":{
                    sum : { "field" : "palabra.keyword"},
                }          
            } 
        }
        }
        }).then((resp,error)=>{
            if(error)
            {
                this.log.error(error)
            }
            this.log.info(JSON.stringify(resp,null,4))
            tags = resp 
        })
        return tags 
    }
}
