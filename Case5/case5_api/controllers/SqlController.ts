import { SqlConnection} from "../connections"
import { Logger, Constants, Article} from '../common'


var Request = require('tedious').Request
var TYPES= require('tedious').TYPES 

/**
 * Class in charge of handling all the request to the MSSQL db
 */
export class SqlController{
    private static instance: SqlController 

    private connection 
    
    private constructor()
    {
        this.connection = SqlConnection.getInstance().connection 
    }
    
    /**
    * Request MSSQL for all articles that matches any of the tags in the array
    * @param tags 
    */
    public async getArticles(pHashtags : String[], callback){

        let connection = this.connection

        var hashtagsTable = {
            columns: [
            {name: 'Hashtag', type: TYPES.VarChar, length: 100}
            ],
            rows: []
        } 
        for (var index = 0 ; index < pHashtags.length ; index++) {
            var row = [pHashtags[index]] 
            hashtagsTable.rows.push(row) 
        }
        let constructedArticles : Article[]
        constructedArticles = []
        this.connection.on('connect', function(err){
            
            let logger = new Logger() 
            if (err) {
                logger.error(err) 
            }
            else{
                logger.info(Constants.DBCONNECTION_STABLISHED_MESSAGE)
            }

            var request = new Request("SP_GetHashtagsArticles", (err, rowCount, rows) => {
                if (err) {
                    callback(err);
                } else {
                    if (rowCount < 1) {
                        callback(null, false);
                    } else {
                        callback(null, constructedArticles);
                    }
            }})
            request.addParameter('pHashtags', TYPES.TVP, hashtagsTable) 

            request.on('doneInProc', function (rowCount, more, rows) {
                var current = 0
                rows.forEach(row => {
                    if (row.Id.value != current){
                        current        = row.Id.value
                        var name       = row.Name.value
                        var author     = row.Author.value
                        var postTime   = row.PostTime.value
                        let sections   : {Content : String, ComponentType : Number}[]
                        sections = []
                        let newArticle = new Article(name, author, postTime, sections)
                        constructedArticles.push(newArticle)
                    }
                    var lastIndex = constructedArticles.length - 1
                    constructedArticles[lastIndex].Sections.push({Content: row.Content.value, ComponentType: row.ComponentTypeId.value})
                })
            }) 

            connection.callProcedure(request)
        })
    }
    /**
     * Returns an instance of the class
     */
    public static getInstance (): SqlController {
        if (!SqlController.instance) {
            SqlController.instance = new SqlController() 
        }
        return SqlController.instance 
    }

}
