const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: '',
  password: '',
  database: 'employees'
});

module.exports = connection;
