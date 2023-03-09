const Like = require('../models/like');
const Comment = require('../models/comment');
const Post = require('../models/Post');

module.exports.GiveLike = async function(req,res){
    try{
        let likeable;// its the id of post or comment

        if(req.query.type == 'post'){
            likeable = await Post.findById(req.query.id).populate('likes');
        }else{
            likeable = await Comment.findById(req.query.id).populate('likes');
        }

        let like = await Like.findOne({
            user : req.user._id,
            likeable : req.query.id,
            onModel : req.query.type
        });

        if(like){
            likeable.likes.pull(like.id);
            likeable.save();
            like.remove();
        }else{
            let newLike = await Like.create({
                user : req.user._id,
                likeable : req.query.id,
                onModel : req.query.type
            });
            likeable.likes.push(newLike.id);
            likeable.save();
        }
        
        return res.redirect('back');
    }catch(err){
        if(err){console.log('error in givelike -->> ',err);return}
        return res.redirect('back');
    }
}