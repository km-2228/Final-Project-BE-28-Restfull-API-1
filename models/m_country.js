const { default: mongoose } = require("mongoose");

const CountrySchema = mongoose.Schema({
    country:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default: new Date(),
    }
});

const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;