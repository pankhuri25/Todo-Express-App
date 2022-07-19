const express = require('express');
const app =  express();
const router = express.Router();
const homeController = require('../controllers/home_controller');
app.use(express.urlencoded({extended: true}));

console.log("Router loaded");

router.get('/', homeController.home);
// router.post('/add-task', homeController.addTask);

module.exports = router;