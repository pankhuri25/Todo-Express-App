const express = require('express');
const router = express.Router();

// import action controller path
const actionController = require('../controllers/action_controller');

// Middleware to decode data coming from browser in the form of request.body
router.use(express.urlencoded({ extended: true }));

// to handle the requests coming to /add-task and execute addTask function to create task
router.post('/add-task', actionController.addTask);

// to handle the requests coming to /delete-task and execute deleteTask function for individual task
router.get('/delete-task', actionController.deleteTask);

// to handle the requests coming to /delete-tasks and execute deleteTasks function for multiple tasks
router.post('/delete-tasks', actionController.deleteTasks);

module.exports = router;