const express = require('express');

const router = express.Router();
const passport = require('passport');
const multer = require('multer');

const UserController = require('../controller/user_controller');

router.get('/sign-up',UserController.SignUp);
router.post('/create',UserController.create);
router.get('/preview', passport.checkAuthentication, UserController.Preview);
router.get('/profile', passport.checkAuthentication, UserController.Profile);
router.post('/update-user',multer({ dest: 'uploads/users/dp' }).single('dp'),passport.checkAuthentication, UserController.UpdateUser);


router.post('/create-session',passport.authenticate('local',{failureRedirect : '/'}),UserController.CreateSession);

router.get('/sign-out',UserController.destroySession);

router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));

router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/userSignin'}),UserController.CreateSession);

router.post('/reset-password', passport.checkAuthentication, UserController.ResetPassword);

router.get('/Reset_Password/:token',UserController.Reset);
router.post('/update-password/:token',UserController.UpdatePassword);

module.exports = router;