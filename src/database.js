var mysql = require('mysql');

const HOST = "localhost";
const DATABASE = "social-media";



   const dbConn =  mysql.createConnection({
        host: HOST,
        user: 'root',
        password: '',
        database: DATABASE
    });
    dbConn.connect(function(err, result) {
        if (err) {
          return console.error('error: ' + err.message);
        }
        console.log('Connected to the MySQL server.');

      });



module.exports = dbConn;

