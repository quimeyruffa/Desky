const user = require('../models/User');

exports.getUser = async (username) =>{
    const User = await user.findOne({username:username})
    return User;

}