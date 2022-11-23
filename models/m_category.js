const { default: mongoose } = require("mongoose");

const CategorySchema = mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default: new Date(),
    }
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;