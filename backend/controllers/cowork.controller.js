const CoworkService = require("../services/cowork.service");

exports.getCoworksInPriceRange = async (req, res) => {
    const [min, max] = req.query;
    const filtro = {"tipo": {"$elemMatch" : {"$and" :  [{"precio": {"$gte": min}}, {"precio": {"$lte": max}}]}}};
    
    const data = await CoworkService.getCoworks(filtro);

    data.then((resp) => {
        console.log(JSON.stringify(resp));
    }).catch((e) => {
        console.log(e);
    });

    return res.json(data);
};

exports.getCoworksInDateRange = async (req, res) => {
    const [fechaIni, fechaFin] = req.query;
    const filtro = {"tipo": {"$elemMatch" : {"$and" :  [{"fechaIni": {"$gte": new Date(fechaIni)}}, {"fechaFin": {"$lte": new Date(fechaFin)}}]}}};

    const data = await CoworkService.getCoworks(filtro);

    data.then((resp) => {
        console.log(JSON.stringify(resp));
    }).catch((e) => {
        console.log(e);
    });

    return res.json(data);
};

exports.getCoworksInOrderByRecommendation = async (req, res) => {
    const [order] = req.query;
    const data = await CoworkService.getCoworksInOrderByRecommendations(order);

    data.then((resp) => {
        console.log(JSON.stringify(resp));
    }).catch((e) => {
        console.log(e);
    });

    return res.json(data);
};