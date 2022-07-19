const express = require('express');
const port = 7000;

const app =  express();

//config file to access mongoDB
const db = require('./config/mongoose');

// model schema for json document collection (mongodb)
const Task = require('./models/tasks');

// use express router
app.use('/', require('./routes'));

// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// middleware to use static asset files
app.use(express.static('./assets'));

// Forms data is converted into key-value pairs from encoded data using express.urlencoded()
// app.use(express.urlencoded()); 
// OR
// use this syntax: const bodyParser = require('body-parser');
// For parsing application/json
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res)=>{
    
    Task.find({}, (err, tasks)=>{
        if(err){
            console.log("Error in fetching Task List");
            return;
        }
        return res.render('home',{
            title: "Tasks",
            task_list: tasks
        });
    });
});

app.post('/add-task', (req, res)=>{
    console.log(req.body);

    // creating and pushing the contact details to our database:
    Task.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate
    }, function(err, newTask){
        if(err){
            console.log("Error in creating task");
            return;
        }
        console.log("New Task:", newTask);
        return res.redirect('back');
    });
});


app.get('/delete-task', (req, res)=>{

    let id = req.query.id;

    Task.findByIdAndDelete(id, (err)=>{
        if(err){
            console.log(err);
            return;
        }
        return res.redirect('back');
    });
});


// ${} is used for interpolating values directly. Use backticks to use them.
app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running Server: ${err}`);
    }
    console.log(`Server is running on Port: ${port}`);
});