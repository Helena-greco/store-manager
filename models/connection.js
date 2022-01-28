// https://nodejs.org/dist/latest-v8.x/docs/api/process.html
const mysql = require('mysql2/promise');

    const connection = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: 'StoreManager',
    });

    module.exports = connection;