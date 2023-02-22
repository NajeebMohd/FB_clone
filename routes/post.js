const express = require('express');
const router = express.Router();
const passport = require('passport');

const PostController = require('../controller/posts_controller');

router.post('/create-post',passport.checkAuthentication,PostController.CreatePost);
router.get('/delete-post/:id', passport.checkAuthentication, PostController.DeletePost);

module.exports = router;