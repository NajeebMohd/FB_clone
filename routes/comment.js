const express = require('express');
const router = express.Router();
const passport = require('passport');

const CommentController = require('../controller/comment_controller');

router.post('/create-comment', passport.checkAuthentication, CommentController.CreateComment);

module.exports = router;
