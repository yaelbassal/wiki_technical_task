//express is a framework that helps you set up routes to respond to a http request.
const express = require('express');
const app = express();
//The path module provides utilities for working with file and directory paths.
const path = require('path');
//body parser used for post requests.
const bodyParser = require('body-parser')
const port = 3000;

/* middleware
- configures how your express application works.
- Middleware are functions that are invoked during a request from a client. The request goes through the middleware functions before getting to the final intended route.
*/

// static file-serving middleware - makes the public directory public
app.use(express.static(path.join(__dirname, '..', 'public')))

//This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//The path.join() method joins all given path segments together
//__dirname is used to point to directories.
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

//post request happens when a client requests to modify a resource on the server. An example is to input data into a db.
app.post('/submission', function(req, res) {

  /*
  1. access req.body is defined in the the post request.
  2. add instructions to add to mySQL goes here.
  3. call insert method of some kind.
     - require mysql
     - define req.body.? variables.
     - const sql = ?
     example: `INSERT INTO user (Name, Email, Address, City, Country, password) VALUES ('"+name+"', '"+email+"', '"+address+"', '"+city+"', '"+country+"', '"+password+"')`;
     - connection.query(sql, [name, email, addres..]){}
     https://stackoverflow.com/questions/49821318/how-to-insert-data-into-mysql-table-using-node-and-express
  */

  //to see log, just click submit on the form or use postman.
  console.log(req.body)

  //at the end...redirect...
  res.sendFile(path.join(__dirname, '../public/confirmation.html'))
})

//bind and listen the connections on the specified host and port.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
