const express = require('express');
const port = 7000;

const app =  express();



app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running Server: ${err}`);
    }
    console.log(`Server is running on Port: ${port}`);
});