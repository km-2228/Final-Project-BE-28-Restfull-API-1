const User = require('./../../models/m_user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const env = require('dotenv');
const {res_error, res_success} = require('../../response')
env.config();

const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({ email }).lean();
        const data = {}
        if(!user) return res_error(res, 400, "400 Bad Request", "Your email or password is invalid")

        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign({user},process.env.JWTTOKEN)
            data._id = user._id
            data.token = token
            data.username = user.username
            data.role = user.role
            return res_success(res, 200, "200 OK", "You was login", data)
        }

        return res_error(res, 400, "400 Bad Request", "Your email or password is invalid")
    } catch (error) {
        if(error) res_error(res, 500, "500 Internal Server Error", error.message)
    }
}

const register = async (req, res) => {
    try {
        const {username, password:textPass, country, email} = req.body
        const password = await bcrypt.hash(textPass, 10);
        await User.create({username, password, country, email}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 201, "201 Created", "Your Account was registered")
        })

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {login, register};