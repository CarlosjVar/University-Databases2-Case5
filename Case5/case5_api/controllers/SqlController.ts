import { SqlConnection} from "../connections"
import { Logger, Constants, Article} from '../common'
import { Types } from "mongoose"


var Request = require('tedious').Request
var TYPES = require('tedious').TYPES 

/**
 * Class in charge of handling all the request to the MSSQL db
 */
export class SqlController{
    
    private static instance: SqlController 
    
    private constructor(){}
    
    /**
    * Request MSSQL for all articles that matches any of the tags in the array
    * @param pHashtags list of hashtags as parameter to request setting
    * @param callback  callback function as parameter to request setting
    */
    public async getArticles(pHashtags : String[], callback){

        //  Build the connection to database
        let connection = (new SqlConnection()).connection

        // Set the request
        let request = this.setArticlesRequest(pHashtags, callback)
        
        // On connection open event
        connection.on('connect', function(err){

            let logger = new Logger() 

            if (err) {
                logger.error(err) 
            }
            else{
                logger.info(Constants.SQLCONNECTION_STABLISHED_MESSAGE)
            }

            connection.callProcedure(request)

        })

    }

    /**
    * Configure SQL request properties
    * @param pHashtags list of hashtags to seek
    * @param callback  callback function to return result
    */
    private setArticlesRequest(pHashtags : String[], callback) : Request{

        // set the parameter table
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

        // initialize return array
        let constructedArticles : Article[]
        constructedArticles = []

        // initialize request
        var request = new Request("SP_GetHashtagsArticles", (err, rowCount, rows) => {
            if (err) {
                callback(err);
            } else {
                callback(null, constructedArticles);
                
        }})
        
        // add parameters to request
        request.addParameter('pHashtags', TYPES.TVP, hashtagsTable) 
        
        // set finished event
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
        return request
    }

    public static getInstance (): SqlController {
        if (!SqlController.instance) {
            SqlController.instance = new SqlController() 
        }
        return SqlController.instance 
    }

}
