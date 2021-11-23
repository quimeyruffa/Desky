const UserService = require("../services/user.service");

exports.getUser = async (req, res) => {
    const data = await UserService.getUser(req.body.username);
    console.log( data)
    return res.json(data)
}
