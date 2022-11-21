const { default: mongoose } = require("mongoose");

const CommentSchema = mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default: new Date(),
    }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;