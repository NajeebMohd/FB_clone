const Comment = require('../models/comment');
const Post = require('../models/Post');

module.exports.CreateComment = async function(req,res){
    try{
        let post = await Post.findById(req.body.postId);
        if(post){
            let comment = await Comment.create({
                user : req.user.id,
                post : req.body.postId,
                content : req.body.content
            });
            post.comments.push(comment._id);
            post.save();
        }
        return res.redirect('back');
    }catch(err){
        console.log('error while creating the comment --> ',err);
        return res.redirect('back');
    }
}

module.exports.DeleteComment = async function(req,res){
    try{
        let comment = await Comment.findById(req.params.id);
        if(comment.user == req.user.id){            
            await Post.findByIdAndUpdate(comment.post,{$pull : {comments : req.params.id}});
            comment.remove();
        }
        return res.redirect('back');
    }catch(err){
        console.log('error while deleting the comment --> ',err);
        return res.redirect('back');
    }    
}