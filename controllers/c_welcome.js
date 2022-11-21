const {res_error, res_success} = require('./../response/index')
const welcome = (req, res) => {
    try {
        return res_success(res, 200, "200 Ok", "Welcome to Asean Youth Forum, Our API Specification : https://github.com/km-2228/BE-28---Restfull-API-AYF")
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {welcome}