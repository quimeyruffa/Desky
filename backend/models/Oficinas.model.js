var mongoose = require ('mongoose');

const DireccionSchema = new mongoose.Schema({
    streetAddress: String,
    city: String,
    state: String,
    postalCode: String,
    Coordinate: String,
});

const ResenaSchema = new mongoose.Schema({
    puntaje: Number,
    nombre: String,
    texto: String,
    fecha: Date,
})

const OficinaSchema = new mongoose.Schema ({
    idOficina: Number,
    tipo: String,
    precio: Number,
    cantPersonas: Number,
    amenities: [String],
    idCowork: String,
    nombreCowork: String,
    direccion: [DireccionSchema],
    resena: [ResenaSchema],
    promedioPuntos: Number
});

const Oficina = mongoose.model('Oficina', OficinaSchema, 'oficinas')


module.exports = Oficina;