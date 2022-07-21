const express = require('express');

// setting port number
const port = 7000;

// Fire up the express app
const app =  express();

// config file to access mongoDB
const db = require('./config/mongoose');

// model schema for json document collection (mongodb)
const Task = require('./models/tasks');

// use express router
app.use('/', require('./routes'));

// set up EJS view engine and its path
app.set('view engine', 'ejs');
app.set('views', './views');

// middleware to use static asset files
app.use(express.static('./assets'));

// Forms data is converted into key-value pairs from encoded data using express.urlencoded()
// app.use(express.urlencoded()); 
// OR
// use this syntax: const bodyParser = require('body-parser');
// For parsing application/json
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));


// ${} is used for interpolating values directly. Use backticks to use them.
app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running Server: ${err}`);
    }
    console.log(`Server is running on Port: ${port}`);
});