var mongoose = require('mongoose')

const ReservaSchema = new mongoose.Schema({
    idUsuario: String,
    Vigente: Boolean,
    Confirmado: Boolean,
    fechaIni: Date,
    fechaFin: Date,
    idOficina: String,
    idCowork: String
})

const Reserva = mongoose.model('Reserva', ReservaSchema, 'reservas')


module.exports = Reserva;