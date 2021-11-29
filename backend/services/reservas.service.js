const reservas = require('../models/Reservas.model');


exports.getReservas = async (filtro) => {
    const response = await reservas.find(filtro);
    return response
}

exports.actualizarEstado = async (filtro) => {
    const reserva = await reservas.updateOne(filtro, {$set: {"Confirmado": true}});
}