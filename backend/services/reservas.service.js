const reservas = require('../models/Reservas.model');

exports.getReservas = async (filtro) => {
    const response = await reservas.find(filtro);
    return response
}
