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
                post.PostPicture = await cloudinary.Upload(req.file.path, req.file.filename);
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
            let PublicId = post.PostPicture;
            PublicId = PublicId.split('/')[7].slice(0,32);//after spliting into array of strings at 7 position id is found with format and we have to remove the format            
            await cloudinary.Delete(PublicId);
            post.remove();
            await Comment.deleteMany({post: req.params.id});            
        }
        return res.redirect('back');
    }catch(err){
        console.log('error in the delete-post --> ',err);
        return res.redirect('back');
    }
}