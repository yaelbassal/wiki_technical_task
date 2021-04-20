# Instructions on how to create your database and tables in mySQL.

1. Install mySQL on your computer

2. Set up CLI tool mysql to interact with mySQL and run commands

3. create database DONORS;

4. use DONORS;

5. CREATE TABLE Donor_Information (
    LastName TINYTEXT,
    FirstName TINYTEXT,
    Address TINYTEXT,
    City TINYTEXT,
    StateRegion TINYTEXT,
    Country TINYTEXT,
    PostalCode TINYTEXT,
    PhoneNumber TINYTEXT,
    Email TINYTEXT,
    PreferredContact TINYTEXT,
    PreferredPayment TINYTEXT,
    FrequencyDonation TINYTEXT,
    AmountDonation BIGINT,
    Comments LONGTEXT
);

6. In the database directory, in db.js, fill in your user and password information to connect this application to your mySQL database.
