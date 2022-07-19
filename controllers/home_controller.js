const Task = require('../models/tasks');
const express = require('express');
const app =  express();
// app.use(express.urlencoded());
// const bodyParser = require('body-parser');
app.use(express.urlencoded({extended: true}));

// module.exports.home = function(req, res){
    
//     Task.find({}, (err, tasks)=>{
//         if(err){
//             console.log("Error in fetching Task List");
//             return;
//         }
//         return res.render('home',{
//             title: "Tasks",
//             task_list: tasks
//         });
//     });
// }

// module.exports.addTask = function(req, res){
//     console.log(req.body);

//     // creating and pushing the contact details to our database:
//     Task.create({
//         description: req.body.description,
//         category: req.body.category,
//         dueDate: req.body.dueDate
//     }, function(err, newTask){
//         if(err){
//             console.log("Error in creating task");
//             return;
//         }
//         console.log("New Task:", newTask);
//         return res.redirect('back');
//     });
// }

