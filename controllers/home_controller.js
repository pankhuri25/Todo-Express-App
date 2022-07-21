// Require model schema for json document collection (mongodb)
const Task = require('../models/tasks');

// Setting colors for different category labels to be displayed on screen
const colors = {
    Personal: 'orange',
    Work: 'blue',
    School: 'darkgreen',
    Family: 'darkmagenta',
    Other: 'brown',
    'n/a': 'grey'
}

// Export home controller function for rendering main screen on browser
module.exports.home = function(req, res){
    
    Task.find({}, (err, tasks)=>{
        if(err){
            console.log("Error in fetching Task List");
            return;
        }
        return res.render('home',{
            title: "Tasks",
            task_list: tasks,
            color_list: colors
        });
    });
}