const Post = require('../models/Post.js');
const User = require('../models/user');
const Comment = require('../models/comment');
const cloudinary = require('../config/cloudinary');

module.exports.CreatePost = async function(req,res){
     
    try{
        let user = await User.findById(req.user.id);
        if(user){
            let post = await Post.create({
                user: req.user.id,
                caption : req.body.caption
            });
            if(req.file){                               
                post.PostPicture = await cloudinary.Upload(req.file.path, req.file.originalname);
                post.save();
            } 
        }
        return res.redirect('back');
    }catch(err){
        console.log('error while creating post --> ',err);
        return res.redirect('back');
    }    
}

module.exports.DeletePost = async function(req,res){
    try{
        let post = await Post.findById(req.params.id);

        if(post.user == req.user.id){
            post.remove();
            await Comment.deleteMany({post: req.params.id});            
        }
        return res.redirect('back');
    }catch(err){
        console.log('error in the delete-post --> ',err);
        return res.redirect('back');
    }
}