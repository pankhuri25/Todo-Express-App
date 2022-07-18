const express = require('express');
const port = 7000;

const app =  express();

app.use('/', require('./routes'));

// ${} is used for interpolating values directly. Use backticks to use them.
app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running Server: ${err}`);
    }
    console.log(`Server is running on Port: ${port}`);
});