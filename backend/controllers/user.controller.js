const UserService = require("../services/user.service");

exports.getUser = async (req, res) => {
    const data = await UserService.getUser(req.body.username);
    if(data === null){
        return res.status(404)
    }else{
        console.log( data)
        return res.json(data)
    }
}
