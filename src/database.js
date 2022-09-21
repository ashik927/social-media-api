var mysql = require('mysql');

const HOST = "localhost";
const DATABASE = "social-media";



connectWithDb = () => {
    return mysql.createConnection({
        host: HOST,
        user: 'root',
        password: '',
        database: DATABASE
    });
};

module.exports = connectWithDb;
