import {MongooseController} from './mongooseConnection'
import {SqlController}  from '../controllers'
import {Logger,Article} from '../common'
import {elasticController} from './elasticConnection'
/**
 * Class made to implement database agnosticism
 */
export class DataController{
    private Moongose:any 
    private MSSQL:any 
    private Elastic:any 
    private log:Logger 
    private static instance:DataController 
    private constructor(){
        this.log = new Logger   
    }
    /**
     * Returns an instance of the class
     */
    public static getInstance():DataController
    {
        if(!this.instance)
        {
            this.instance = new DataController() 
        }
        return this.instance 
    }
    /**
     * Gets all the articles mathing the provided tags in the 2 databases implemented
     * @param tags 
     */
    public async getArticles(tags:Array<String>):Promise<Array<Article>>
    {
        let mongooseArticles = await  MongooseController.getInstance().getArticlesByTag(tags)
        //let sqlArticles = SqlController.getInstance().getArticles(tags)
        let placeholder = [new Article("a","a","22222",[{Content:"a",ComponentType:1}])]
        console.log(JSON.stringify (mongooseArticles,null,4));
        
        return placeholder
    }
   

}