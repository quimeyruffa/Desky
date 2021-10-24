const cowork = require('../models/Cowork.model');

exports.getCoworks = async (query) => {
    const res = await cowork.find(query);
    return res;
};

exports.getCoworksInOrderByRecommendations =  async (order) => {
    const res = await cowork.find({}).sort({"puntosPromedio": order});
    return res;
};

