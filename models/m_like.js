const { default: mongoose } = require("mongoose");

const LikeSchema = mongoose.Schema({
    thread:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Thread",
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    createdAt:{
        type: Date,
        default: new Date(),
    }
});

const Like = mongoose.model('Like', LikeSchema);

module.exports = Like;