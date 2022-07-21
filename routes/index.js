// Require Express Library
const express = require('express');

// Router Setup
const router = express.Router();

// Setup Controller functions path
const homeController = require('../controllers/home_controller');

// to check if Router is working fine
console.log("Router loaded");

// Routing requests to different actions
router.get('/', homeController.home);
router.post('/add-task', require('./action'));
router.get('/delete-task', require('./action'));
router.post('/delete-tasks', require('./action'));

// Export the router module
module.exports = router;