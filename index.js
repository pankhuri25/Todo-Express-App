const express = require('express');
const port = 7000;

const app =  express();

//config file to access mongoDB
const db = require('./config/mongoose');

// model schema for json document collection (mongodb)
const Tasks = require('./models/tasks');

// use express router
app.use('/', require('./routes'));

// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// middleware to use static asset files
app.use(express.static('assets'));

// ${} is used for interpolating values directly. Use backticks to use them.
app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running Server: ${err}`);
    }
    console.log(`Server is running on Port: ${port}`);
});