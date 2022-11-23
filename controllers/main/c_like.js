const Like = require('./../../models/m_like');
const {res_error, res_success} = require('./../../response');

const getLikeByIdThread = async (req, res) => {
    try {
        const id_thread = req.params.id_thread
        await Like.find({"thread":id_thread}, (err, result) => {
            if(err) return res_error(res, 400, "400 Bad Request", err.message)
            
            return res_success(res, 200, "200 OK", `Datas Likes in id:${id_thread}`, result)
        }).populate('user thread', 'username title').clone().catch(err => console.log(err))
    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

const likeUnlikeThread = async (req, res) => {
    try {
        const id_thread = req.params.id_thread;
        const id_user = req.user.user._id;
        let checkLikeUnlineUser = await Like.findOne({"thread":id_thread, "user":id_user}, (err, result) => {

        }).clone().catch(err => console.log(err))

        if(checkLikeUnlineUser == null){
            await Like.create({thread:id_thread, user:id_user}, (err, result) => {
                if(err) return res_error(res, 400, "400 Bad Request", err.message)
            
                return res_success(res, 200, "200 OK", `Yow was liked article in id:${id_thread}`, result)
            })
        } else{
            await Like.deleteOne({thread:id_thread, user:id_user}, (err, result) => {
                if(err) return res_error(res, 400, "400 Bad Request", err.message)
            
                return res_success(res, 200, "200 OK", `Yow was unlikedd article in id:${id_thread}`)
            }).clone().catch(err => console.log(err))
        }

    } catch (error) {
        if(error) return res_error(res, 500, "500 Internal Server Error",error.message)
    }
}

module.exports = {getLikeByIdThread, likeUnlikeThread}