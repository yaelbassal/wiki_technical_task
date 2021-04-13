//Source: https://expressjs.com/en/guide/database-integration.html#mysql
//Not currently finished - more research needed into mySQL
//learning curve w/ mySQL
//created db, next steps to create sql scripts to create tables. schemas - field names and data types. The organization of data in our database. Define relationships in sequelize. Plain sql you need to join as developer.

//mysql -u root -p

//needs to get exported into module.exports into server/index.js to connect to post route.

var mysql = require('mysql2')
//look into documentation from Brian - can make a .env file. - https://www.npmjs.com/package/dotenv
console.log(process.env.DB_PASSWORD)

var connection = mysql.createConnection({
  host: 'localhost',
  //never use root in a production setting. Is not secure.
  user: 'root',
  password: 'mySQL888',
  database: 'DONORS'
})

connection.connect()

//Create a db if not exist
//Create table if not exist
//Add in readme.
//Docker mysql - Virtual Machine - ex: run windows on a mac computer. Software emulating hardware of another machine. Eliminates combatability issues w/ containers.

//Insert into DONORS. Own file seperate from routes.
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
