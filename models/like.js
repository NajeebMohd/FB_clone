const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    // this defines the object id of the liked object
    likeable : {
        type : mongoose.Schema.ObjectId,
        required : true,
        refPath : 'onModel'
    },
    // this defines the type of the liked object since it's a dynamic reference
    onModel : {
        type : String,
        required : true,
        enum : ['Post','Comment']
    }
},{
    timestamps : true
})

const Like = mongoose.model('Like',LikeSchema);
module.exports = Like;