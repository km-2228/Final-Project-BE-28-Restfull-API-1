const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
     username:{
        type:String,
        required:true,
        minlength:[8, 'Must be at least 8 character'],
        unique:true
     },
     password:{
        type:String,
        required:true,
        minlength:[8, 'Must be at least 8 character']
     },
     role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role",
        required:true
     },
     country:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Country",
        required:true
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     image:{
      type:String,
      default:""
     },
     createdAt:{
        type: Date,
        default: new Date(),
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;