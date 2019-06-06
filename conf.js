const  mysql = require('mysql');
require('dotenv').config();

const  connection = mysql.createConnection({
host : process.env.DB_HOST,
user : process.env.DB_USER, 
password : process.env.DB_PASS,
database : 'itsMyCity', 
});

module.exports = connection;
