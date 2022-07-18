const express = require('express');
const port = 7000;

const app =  express();
const db = require('./config/mongoose');
const Tasks = require('./models/tasks');

// use express router
app.use('/', require('./routes'));

// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// ${} is used for interpolating values directly. Use backticks to use them.
app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running Server: ${err}`);
    }
    console.log(`Server is running on Port: ${port}`);
});