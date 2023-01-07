const express = require('express');
const router = express.Router();
console.log('router is started...'); 


const HomeController = require('../controller/home_controller');


router.use('/users',require('./user.js'));


router.get('/',HomeController.home);


module.exports = router;
