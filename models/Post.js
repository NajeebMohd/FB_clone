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
    PostPicture : {
        type : String
    },
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ],
    likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Like'
        }
    ]

},{
    timestamps : true,
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;