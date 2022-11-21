const { default: mongoose } = require("mongoose");

const RoleSchema = mongoose.Schema({
    role:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default: new Date(),
    }
});

const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;