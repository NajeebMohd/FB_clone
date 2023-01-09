const express = require('express');

const router = express.Router();
const passport = require('passport');

const UserController = require('../controller/user_controller');

router.get('/sign-up',UserController.SignUp);
router.post('/create',UserController.create);
router.get('/preview', passport.checkAuthentication, UserController.Preview);

router.post('/create-session',passport.authenticate('local',{failureRedirect : '/'}),UserController.CreateSession);

router.get('/sign-out',UserController.destroySession);

router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));

router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/userSignin'}),UserController.CreateSession);

router.post('/reset-password',UserController.ResetPassword);
router.post('/update-password/:token',UserController.UpdatePassword);

module.exports = router;