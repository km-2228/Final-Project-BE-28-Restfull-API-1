const { default: mongoose } = require("mongoose");

const CommentSchema = mongoose.Schema({
    comment:{
        type:String,
        minlength:[1, 'Must be at least 1 character']
    },
    thread:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Thread",
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
}, { timestamps: true });

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;