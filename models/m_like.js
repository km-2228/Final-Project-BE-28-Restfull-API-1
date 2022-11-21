const { default: mongoose } = require("mongoose");

const LikeSchema = mongoose.Schema({
    
});

const Like = mongoose.model('Like', LikeSchema);

module.exports = Like;