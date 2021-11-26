const ReservasService = require('../services/reservas.service');
const reservas = require('../models/Reservas.model');

exports.getReserva = async (req, res) => {
    const {email} = req.query;
    const response = await ReservasService.getReservas({emailUsuario: email});
    return res.json(response);
}

exports.reservar = async (req, res) => {
    const reserva = new reservas({
        idUsuario: req.body.idUsuario,
        Vigente: true,
        Confirmado: false,
        fechaIni: req.body.fechaIni,
        fechaFin: req.body.fechaFin,
        cantPersonas: req.body.cantPersonas,
        idOficina: req.body.idOficina,
        idCowork: req.body.idCowork,
        emailUsuario: req.body.emailUsuario
    })

    const newReserva = await reserva.save();
    res.status(200).json(newReserva._id);
}