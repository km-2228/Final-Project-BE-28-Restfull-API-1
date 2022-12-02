const Role = require('../../models/m_role');
const {res_error, res_success} = require('../../response')
const env = require('dotenv');
env.config();

const getAllRoles = async (req, res) => {
    try {
        await Role.find({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get all roles")
            
            return res_success(res, 200, "200 OK", "Get all data Roles ", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const storeRole = async (req, res) => {
    try {
        const {role} = req.body;

        await Role.create({
            role
        }, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot store role")

            return res_success(res, 201, "201 Created", "You was listed a role")
        })
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {getAllRoles, storeRole}