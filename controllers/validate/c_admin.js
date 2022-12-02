const env = require('dotenv');
env.config();
const {res_error} = require('./../../response')

const checkIsAdmin = (req, res, next) => {
    try {
        if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) return res_error(res, 403, "403 Forbidden", "You are not authorized for this")
        next()
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error", "There is an error from the server side")
    }
}

module.exports = {checkIsAdmin}