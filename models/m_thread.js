const { default: mongoose } = require("mongoose");

const ThreadSchema = mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
     },
     title:{
        type:String,
        required:true
     },
     content:{
        type:String,
        minLength:[20, 'Must be at least 20 character'],
        required:true
     },
     category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
     },
     createdAt:{
        type: Date,
        default: new Date(),
    }
});

const Thread = mongoose.model('Thread', ThreadSchema);

module.exports = Thread;