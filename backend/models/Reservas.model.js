var mongoose = require('mongoose')

const ReservaSchema = new mongoose.Schema({
    idUsuario: String,
    Vigente: Boolean,
    Confirmado: Boolean,
    fechaIni: Date,
    fechaFin: Date,
    cantPersonas: Number,
    idOficina: String,
    idCowork: String,
    emailUsuario: String
})

const Reserva = mongoose.model('Reserva', ReservaSchema, 'reservas')


module.exports = Reserva;