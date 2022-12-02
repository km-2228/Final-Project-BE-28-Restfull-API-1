const { default: mongoose } = require("mongoose");

const CountrySchema = mongoose.Schema({
    country:{
        type:String,
        required:true
    }
}, { timestamps: true });

const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;