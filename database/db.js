//Source: https://expressjs.com/en/guide/database-integration.html#mysql

var mysql = require('mysql2')

var connection = mysql.createConnection({
  host: 'localhost',
  //never use root in a production setting. Is not secure.
  user: 'root',
  password: 'mySQL888',
  database: 'DONORS'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
