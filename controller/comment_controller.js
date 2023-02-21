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
            post.comments.push(comment._id);
            post.save();
        })
        
    });
    return res.redirect('back');
}

module.exports.DeleteComment = function(req,res){
    Comment.findById(req.params.id,function(err,comment){
        if(err){console.log('error in the delete-comment --> ',err);return}
        if(comment.user == req.user.id){
            let postId = comment.post;
            Post.findByIdAndUpdate(postId,{$pull : {comments : req.params.id}}, function(err,post){
                if(err){console.log('error in the delete-comment --> ',err);return}
                return res.redirect('back');
            })
        }else{
            return res.redirect('back');
        }
    })   
}