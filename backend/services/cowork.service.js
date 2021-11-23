const Cowork = require('../models/Cowork.model')


exports.getCowork = async (filtro) => {
    const res = await Cowork.find(filtro);
    return res;
}
