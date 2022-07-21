// Require mongoose ODM to manage mongo db connection and database
const mongoose = require('mongoose');

// Creating schema as per requirement. This is how one document with given fields would look like.
const taskSchema = new mongoose.Schema({
    description: {
        type : String,
        required : true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
});

// Model creation
const Task = mongoose.model('Task', taskSchema);

// Export the given DB schema
module.exports = Task;