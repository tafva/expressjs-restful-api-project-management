const mysql = require('mysql');

const config = {
  multipleStatements  : true,
  host                : 'localhost',
  user                : 'root',
  password            : '',
  database            : 'mysql-expressjs'
};

const pool = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports = pool;
