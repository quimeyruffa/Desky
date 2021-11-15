const OficinaService = require("../services/oficina.service");

exports.getOficinasInPriceRange = async (req, res) => {
    const {min, max} = req.query;

    const filtro = {"$and": [{"precio": {"$gte": min}}, {"precio": {"$lte": max}}]};

    const data = await OficinaService.getOficinas(filtro);

    return res.json(data);
};

exports.getOficinasInDateRange = async (req, res) => {
    const {fechaIni, fechaFin} = req.query;

    const filtro ={"$and": [{"fechaIni": {"$gte": new Date(fechaIni)}}, {"fechaFin": {"$lte": new Date(fechaFin)}}]};

    const data = await OficinaService.getOficinas(filtro);

    return res.json(data);
};

exports.getOficinasInOrderByRecommendation = async (req, res) => {
    const {order} = req.query;

    const data = await OficinaService.getOficinasInOrderByRecommendations(order);

    return res.json(data);
};

exports.getAllOficinas = async (req, res) => {
    const data = await OficinaService.getOficinas({});

    return res.json(data);
}