const mongoose = require('mongoose');

const RPSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'                
    },
    token : {
        type : String,
        required : true        
    },
    is_valid : {
        type : Boolean,
        required : true
    }
},{
    timestamps : true
});

const RP = mongoose.model('RP',RPSchema);

module.exports = RP;