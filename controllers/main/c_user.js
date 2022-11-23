const Thread = require('../../models/m_thread');
const User = require('../../models/m_user');
const {res_error, res_success} = require('../../response')

const editProfile = async (req, res) => {

}

const getProfile = async (req, res) => {
    try {
        const _idUser = req.user.user._id
        await User.findOne({"_id":_idUser}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get profile")

            return res_success(res, 200, "200 OK", "Your data was checked", result)
        }).populate('role country', "role country").clone().catch(err => console.log(err))
        
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const updateImage = async (req, res) => {

}

const threadUser = async (req, res) => {
    try {
        const _idUser = req.user.user._id
        await Thread.find({"user":_idUser}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get your threads")

            return res_success(res, 200, "200 OK", "Your Threads", result)
        }).clone().catch(err => console.log(err))
        
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {editProfile, getProfile, updateImage, threadUser}