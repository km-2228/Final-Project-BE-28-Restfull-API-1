const Thread = require('../../models/m_thread');
const User = require('../../models/m_user');
const bcrypt = require('bcryptjs');
const {res_error, res_success} = require('../../response')

const editProfile = async (req, res) => {
     try {
        const {country} = req.body;
        const _idUser = req.user.user._id
        await User.updateOne({"_id":_idUser}, 
        {$set:{"country":country}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot change profile")

            return res_success(res, 200, "200 OK", "Your profile was changed")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }   
}

const editPassword = async (req, res) => {
    try {
        const {password:textPass} = req.body;
        const password = await bcrypt.hash(textPass, 10);
        const _idUser = req.user.user._id
        await User.updateOne({"_id":_idUser}, 
        {$set:{"password":password}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot change profile")

            return res_success(res, 200, "200 OK", "Your profile was changed")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
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
    try {
        const {image} = req.body;
        const _idUser = req.user.user._id
        await User.updateOne({"_id":_idUser}, 
        {$set:{image}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot change image")

            return res_success(res, 200, "200 OK", "Your image was changed")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }   

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

module.exports = {editProfile, getProfile, updateImage, threadUser, editPassword}