const express = require('express');
const router = express.Router();
const passport = require('passport');
const multer = require('multer');


const PostController = require('../controller/posts_controller');

router.post('/create-post',multer({ dest: 'uploads/posts' }).single('PostPicture'),passport.checkAuthentication,PostController.CreatePost);
router.get('/delete-post/:id', passport.checkAuthentication, PostController.DeletePost);

module.exports = router;