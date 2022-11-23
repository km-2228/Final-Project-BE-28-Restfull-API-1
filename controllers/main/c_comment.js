const Comment = require('./../../models/m_comment');
const {res_error, res_success} = require('./../../response')

const getCommentByIdThread = async (req, res) => {
    try {
        const id_thread = req.params.id_thread

        await Comment.find({"thread":id_thread}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot get all comments by ID of thread")
            
            return res_success(res, 200, "200 OK", `Get data comments in thread with id : ${id_thread}`, result)
        }).populate('user thread', 'username title').clone().catch(err => console.log(err))

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const postComment = async (req, res) => {
    try {
        const {comment} = req.body
        const id_thread = req.params.id_thread
        if(!id_thread) res_error(res, 403, "403 Forbidden", "You're not an authenticated, authorized user")

        await Comment.create({comment, thread:id_thread, user:req.user.user._id}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", "Request error by client so that it cannot store comment by ID of thread")

            return res_success(res, 201, "201 Created", `You was commented the article with id : ${id_thread}`)
        })

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }   
}

module.exports = {getCommentByIdThread, postComment};