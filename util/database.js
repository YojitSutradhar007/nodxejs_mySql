const mysql=require('mysql2');

const database = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_complete',
    password: 'suthar@123'
});

module.exports=database.promise();