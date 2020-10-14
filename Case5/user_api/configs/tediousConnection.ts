var Connection = require('tedious').Connection;
var RequestTed = require('tedious').Request
var TYPES= require('tedious').TYPES;
// db setup

class tediousManager{
    connection;
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
                    encrypt: false
                }
            };
            this.connection = new Connection(config);
        }
    public getData() {
        this.connection.on('connect', function (err) {
            if (err) {
                console.log(err)
            }
        });
        var request = new RequestTed("SELECT * from Hashtags", (err, rowCount, rows) => {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount + " rows returned");
            }
        });
        var result = "";
        request.on('row', function (columns) {
            var obj = JSON.parse(columns[0].value);
            console.log(obj);
        });

        request.on('done', function (rowCount: number, more: boolean) {
            console.log(rowCount + ' rows returned');
        });
        this.connection.execSql(request);
        return result;
    }
}

var tedious = new tediousManager()
export default tedious;
