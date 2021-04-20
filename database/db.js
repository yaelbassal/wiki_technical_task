//Source: https://expressjs.com/en/guide/database-integration.html#mysql

var mysql = require('mysql2')

var connection = mysql.createConnection({
  host: 'localhost',
  //never use root in a production setting. Is not secure.
  user: '',
  password: '',
  database: 'DONORS'
})

module.exports = connection
