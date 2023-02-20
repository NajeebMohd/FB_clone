const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    caption : {
        type: String,
        required : true
    },
    dp : {
        type : String
    },
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ]

},{
    timestamps : true,
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;