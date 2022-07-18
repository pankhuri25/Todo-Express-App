const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    category: {
        type: String,
        required: false
    },
    dueDate: {
        type: Date,
        required: true
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;