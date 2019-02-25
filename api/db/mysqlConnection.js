const mysql = require('mysql');
var mysqlConnection;

function connectDatabase() {
    if (!mysqlConnection) {
        mysqlConnection =  mysql.createConnection({

            host:"localhost",
            user:"root",
            password:"password",
            database:"project_db",
            multipleStatements:true
        });

        mysqlConnection.connect((err)=>{

            if (!err)
            console.log("Database conection success");
            else
            console.log("Database conection  NOT success"+ JSON.stringify(err,undefined,2));
        });
    }
    return mysqlConnection;
}
module.exports = connectDatabase();


