const Comment = require('../models/comment');
const Post = require('../models/Post');
module.exports.CreateComment = function(req,res){
    
    Comment.create({
        user:req.user.id,
        post : req.body.postId,
        content : req.body.content
    },function(err,comment){
        if(err){
            console.log(err,' in the create comment ');
            return;
        }
        Post.findById(req.body.postId,function(err,post){
            if(err){console.log('err in cc',err);return}
            console.log(comment);
            post.comments.push(comment._id);
            post.save();
        })
        
    });
    return res.redirect('back');
}