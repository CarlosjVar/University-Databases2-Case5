import { SqlConnection} from "../connections"
import { Logger, Constants } from '../common'

var Request = require('tedious').Request
var TYPES= require('tedious').TYPES;



// db setup

export class SqlController{
    private static instance: SqlController;

    private connection;
    
    private constructor()
    {
        this.connection = SqlConnection.getInstance().connection;
    }
    

    public getArticles(Hashtag : String) {
        
        let connection = this.connection
        
        this.connection.on('connect', function(err){
            let logger = new Logger();
            if (err) {
                logger.error(err);
            }
            else{
                logger.info(Constants.DBCONNECTION_STABLISHED_MESSAGE)
            }

            var request = new Request("SP_GetHashtagsArticles", (err, rowCount, rows) => {
                if (err) {
                    logger.error(err);
                } else {
                    logger.info(rowCount + " rows returned");
                }
            });

            request.addParameter('pHashtag', TYPES.VarChar, Hashtag);


            request.on('doneInProc', function (rowCount, more, rows) {
                /*
                * TODO: Lógica de los result sets
                */
                rows.forEach(function(row){
                    console.log(row)
                })
            });
            connection.callProcedure(request);
        })
    }

    public static getInstance (): SqlController {
        if (!SqlController.instance) {
            SqlController.instance = new SqlController();
        }
        return SqlController.instance;
    }

}
