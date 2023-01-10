const express = require('express');
const router = express.Router();
console.log('router is started...'); 


const HomeController = require('../controller/home_controller');


router.use('/users',require('./user.js'));
router.get('/forgetps',HomeController.forgetps);
router.post('/send-me-mail',HomeController.SendMeMail);

router.get('/',HomeController.home);


module.exports = router;
