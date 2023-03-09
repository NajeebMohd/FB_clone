const express = require('express');
const router = express.Router();
const passport = require('passport');

const LikeController = require('../controller/like_controller');

router.get('/give-likes/',passport.checkAuthentication, LikeController.GiveLike);

module.exports = router;