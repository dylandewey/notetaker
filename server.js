const express = require('express');
const fs = require('fs');
const path = require('path');


// creating an 'express' server
const app = express();

//Initial PORT
const PORT = process.env.PORT || 7500;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes File
require('./Develop/routes/routes')(app);

//Starts the server
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});