const Post = require('../models/Post.js');

module.exports.CreatePost = function(req,res){
    console.log(req.body);
    return res.redirect('back');
}