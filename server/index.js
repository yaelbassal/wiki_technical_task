//express is a framework that helps you set up routes to respond to a http request.
const express = require('express');
const app = express();
//The path module provides utilities for working with file and directory paths.
const path = require('path');
//body parser used for post requests.
const bodyParser = require('body-parser');
const connection = require('../database/db')
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

  //connect to mySQL
  connection.connect(function(error){
    if(error){
      console.log("Error while connecting to database")
    } else {
      console.log("Successfully connected to database")
    }});

  //1. access values from req.body - to see log, just click submit on the form or use postman.
  console.log(req.body)
  const lastName = req.body.lastname;
  const firstName = req.body.firstname;
  const streetAddress = req.body.streetaddress;
  const city = req.body.city;
  const stateRegion = req.body.state_region;
  const country = req.body.country;
  const postalCode = req.body.postalcode;
  const phone = req.body.phone;
  const email = req.body.email;
  const preferredContact = req.body.preferred_form_of_contact;
  const preferredPayment = req.body.preferred_form_of_payment;
  const frequency = req.body.frequency;
  const donationAmount = req.body.donation_amount;
  const comments = req.body.comments;

  //2. add instructions to add to mySQL goes here.
  const queryString = "INSERT INTO Donor_Information (LastName, FirstName, Address, City, StateRegion, Country, PostalCode, PhoneNumber, Email, PreferredContact, PreferredPayment, FrequencyDonation, AmountDonation, Comments) VALUES ('"+lastName+"', '"+firstName+"', '"+streetAddress+"', '"+city+"', '"+stateRegion+"', '"+country+"', '"+postalCode+"', '"+phone+"', '"+email+"', '"+preferredContact+"', '"+preferredPayment+"', '"+frequency+"', '"+donationAmount+"', '"+comments+"')";

  //3. call insert method: https://stackoverflow.com/questions/49821318/how-to-insert-data-into-mysql-table-using-node-and-express

  connection.query(queryString, function (err, result) {
    if (err) throw err

    console.log('Records successfully inserted into mySQL DONORS database')
  })

  //end connection with mySQL
  connection.end()

  //at the end...redirect...
  res.sendFile(path.join(__dirname, '../public/confirmation.html'))
})

//bind and listen the connections on the specified host and port.
app.listen(port, () => {
  console.log(`Wikimedia app listening at http://localhost:${port}`)
})
