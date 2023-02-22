const Post = require('../models/Post.js');
const User = require('../models/user');
const Comment = require('../models/comment');

module.exports.CreatePost = function(req,res){
    
    User.findById(req.user.id,function(err,user){
        if(err){console.log('err in the create-post --> ',err);return}
        if(user){
            Post.create({
                user: req.user.id,
                caption : req.body.caption
            },function(err){
                if(err){console.log('error while creating a post -> ',err);return}                
            })
        }
        return res.redirect('back');
    })
}
module.exports.DeletePost = async function(req,res){
    try{
        let post = await Post.findById(req.params.id);

        if(post.user == req.user.id){
            post.remove();
            await Comment.deleteMany({post: req.params.id});

            return res.redirect('back');
        }else{
            return res.redirect('back');
        }
    }catch(err){
        console.log('error in the delete-post --> ',err);
        return res.redirect('back');
    }
}