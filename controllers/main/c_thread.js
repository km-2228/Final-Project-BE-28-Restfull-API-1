const Thread = require('../../models/m_thread');
const {res_error, res_success} = require('../../response')

const getAllThreads = async (req, res) => {
    try {
        await Thread.find({}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get all articles")
            
            return res_success(res, 200, "200 OK", "Get all data Articles", result)
        }).clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const filterAndSearching = async (req, res) => {
    
}

const postThread = async (req, res) => {
    try {
        const data = req.body
        data.author = req.user.user._id
        // if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't store the article (Admin)");
        await Thread.create(data, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)

            return res_success(res, 201, "201 Created", "You was post a thread")
        })
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const updateThreadById = async (req, res) => {

}

const deleteThread = async (req, res) => {
    try {
        let id_thread = req.params.id;

        if(req.user.user.role != process.env.ADMIN || req.user.user.role == null) res_error(res, 403, "403 Forbidden", "Unauthenticated error and incorrect address so can't delete article by id (Admin)");

        await Like.deleteMany({"thread":id_thread});
        await Comment.deleteMany({"user":id_thread});

        await Article.deleteOne({_id:_idArticle}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot delete article by ID")

            return res_success(res, 200, "200 OK", "You was deleted a article")
        }).clone().catch(err => console.log(err))


    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {getAllThreads, filterAndSearching, postThread, updateThreadById, deleteThread}