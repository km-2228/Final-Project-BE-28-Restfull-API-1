const { default: mongoose } = require("mongoose");

const CommentSchema = mongoose.Schema({
    
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;