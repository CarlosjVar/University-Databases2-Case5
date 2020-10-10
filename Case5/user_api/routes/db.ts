import * as express from 'express';
import { Logger } from '../logger/logger';
var Connection = require('tedious').Connection;
var Request = require('tedious').Request
var TYPES = require('tedious').TYPES;
// db setup
var config = {
    server: 'host.docker.internal',
    port: Number(process.env.PORT),
    authentication: {
        type: 'default',
        options: {
            userName: 'User',
            password: '1234'
        }
    },
    dialect: 'mssql',
    options: {
        database: 'Caso5BD2',
        rowCollectionOnRequestCompletion: true,
        encrypt: false
    }
};
var connection = new Connection(config)


// express setup
const app = express();
const logger = new Logger()

app.use('/getHashtag',(req,res,next)=>{
    logger.info('databases route');
    connection.on('connect', function(err) {
        if(err){
            console.log(err)
        }
    });

    var result = executeStatement();
    res.send("hagamos la morición");
})
function executeStatement() {
    var request = new Request("SELECT * from Hashtags", (err,rowCount,rows)=> {
        if (err) {
            console.log(err);}
        else{
            console.log(rowCount + " rows returned");
        }
    });
    var result = "";
    request.on('row', function(columns) {
        var obj = JSON.parse(columns[1].value);
        console.log(obj);
    });

    request.on('done', function(rowCount:number, more:boolean) {
        console.log(rowCount + ' rows returned');
    });
    connection.execSql(request);
    return result;
}

export default app;