const Thread = require('../../models/m_thread');
const Comment = require('./../../models/m_comment');
const env = require('dotenv');
const {res_error, res_success} = require('../../response')
env.config();

const getAllThreads = async (req, res) => {
    try {
        await Thread.find({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get all threads")

            return res_success(res, 200, "200 OK", "Get all data threads", result)
        }).populate('author category', 'username image category country')
        .clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const filterAndSearching = async (req, res) => {
    try {
        const uri = req.query.title
        await Thread.find({$text:{$search:uri}}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot searching thread")
        
            return res_success(res, 200, `200 OK", "Get data thread by searching ${uri}`, result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const postThread = async (req, res) => {
    try {
        const data = req.body
        data.author = req.user.user._id
        
        await Thread.create(data, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 201, "201 Created", "You was post a thread")
        })
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const updateThreadById = async (req, res) => {
    try {
        let id_thread = req.params.id;
        let data = req.body;
        let {user} = req.body;
        
        if(req.user.user.role != process.env.ADMIN && req.user.user._id != user) return res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't delete thread by id");

        await Thread.updateOne({"_id":id_thread}, {$set:data}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot change thread by ID")

            return res_success(res, 200, "200 OK", "You was change a thread by id")
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const deleteThread = async (req, res) => {
    try {
        let id_thread = req.params.id;
        let {user} = req.body;

        if(req.user.user.role != process.env.ADMIN && req.user.user._id != user) return res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't delete thread by id");
        
        await Comment.deleteMany({"thread":id_thread});

        await Thread.deleteOne({"_id":id_thread}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot delete thread by ID")

            return res_success(res, 200, "200 OK", "You was deleted a thread")
        }).clone().catch(err => console.log(err))


    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {getAllThreads, filterAndSearching, postThread, updateThreadById, deleteThread}

// {
//     "email":"adonantimun@gmail.com",
//     "password":"adonansemangka"
//   }