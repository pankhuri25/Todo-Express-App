// import model and schema 
const Task = require('../models/tasks');

// import database configuaration
const db = require('../config/mongoose');

module.exports.addTask = function(req, res){
    console.log(req.body);

    // creating and pushing the Task details to our database:
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
}

// Delete by ID (Individual Task) using Delete Icon
module.exports.deleteTask = function(req, res){

    let id = req.query.id;
    Task.findByIdAndDelete(id, (err)=>{
        if(err){
            console.log(err);
            return;
        }
        return res.redirect('back');
    });
}

// Delete by IDs (Multiple Tasks) using Delete Button
module.exports.deleteTasks = function(req, res){

    if(req.body.id == undefined){
        console.log("Tasks not selected");
        return res.redirect('back');
    }
    else{
        for(let i of req.body.id){
            Task.findByIdAndDelete(i, function(err){
                if(err){
                    console.log("error deleting tasks ");
                    return;
                }
            });
        }
        return res.redirect('back');
    }
}