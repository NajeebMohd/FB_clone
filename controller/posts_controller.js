const Post = require('../models/Post.js');
const User = require('../models/user');

module.exports.CreatePost = function(req,res){
    Post.create({
        user: req.user.id,
        caption : req.body.caption
    },function(err){
        if(err){console.log('error while creating a post -> ',err);return;}
        return res.redirect('back');
    })
}