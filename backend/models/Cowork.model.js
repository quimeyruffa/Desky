var mongoose = require('mongoose')


const resenaSchema = new mongoose.Schema({
    puntaje: Number,
    nombre: String,
    texto: String,
    fecha: Date,
})

const direccionSchema = new mongoose.Schema({
    streetAddress: String,
    city: String,
    state: String,
    postalCode: String,
    Coordinate: String,
})

const reservaSchema = new mongoose.Schema({
    idUsuario: String,
    Vigente: Boolean,
    Confirmado: Boolean,
})

const tipoSchema = new mongoose.Schema({
    type: String,
    precio: Number,
    fechaIni: Date,
    fechaFin: Date,
    cantPersonas: Number,
    diferencial: [Number],
    reserva: [reservaSchema]
})

const CoworkSchema = new mongoose.Schema({
    _id: String,
    nombre: String,
    email: String,
    resena: [resenaSchema],
    direccion: direccionSchema,
    amenities: Number,
    promedioPuntos: Number,
    tipo: [tipoSchema]
});



const Cowork = mongoose.model('Cowork', CoworkSchema, 'coworkings')


module.exports = Cowork;