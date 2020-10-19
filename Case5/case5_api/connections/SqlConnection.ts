import { Logger, Constants } from '../common'
var Connection = require('tedious').Connection 

export class SqlConnection {

    public connection 

    constructor() 
    {  
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
                useColumnNames: true,
                rowCollectionOnDone: true,
                encrypt: false
            }
        }
        this.connection = new Connection(config)
 
    }
}