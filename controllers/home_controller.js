module.exports.home = function(req, res){
    
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
}

