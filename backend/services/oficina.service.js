const oficina = require ('../models/Oficinas.model');

exports.getOficinas = async (query) => {
    const res = await oficina.find(query);
    return res;
};

exports.getOficinasInOrderByRecommendations =  async (order) => {
    const res = await oficina.find({}).sort({"puntosPromedio": order});
    return res;
};

