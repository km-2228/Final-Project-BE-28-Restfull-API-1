const env = require('dotenv');
const { default: mongoose } = require("mongoose");
env.config();

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
        default:process.env.USER
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
     
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;