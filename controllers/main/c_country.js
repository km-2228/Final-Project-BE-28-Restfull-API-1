const Country = require('../../models/m_country');
const {res_error, res_success} = require('../../response')
const env = require('dotenv');
env.config();

const getAllCountries = async (req, res) => {
    try {
        await Country.find({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get all countries")
            
            return res_success(res, 200, "200 OK", "Get all data countries ", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const storeCountry = async (req, res) => {
    try {
        const {country} = req.body;

        await Country.create({
            country
        }, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot store country")

            return res_success(res, 201, "201 Created", "You was listed a country")
        })
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteAllCountries = async (req, res) => {
    try {
        await Country.deleteMany({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot delete all countries")

            return res_success(res, 200, "200 OK", "You was deleted all countries")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {getAllCountries, storeCountry, deleteAllCountries}