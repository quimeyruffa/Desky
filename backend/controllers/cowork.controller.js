const coworkService = require('../services/cowork.service');

exports.getCowork = async (req, res) => {
    const {id} = req.query;
    const response = await coworkService.getCowork({_id: id});
    return res.json(response);
}