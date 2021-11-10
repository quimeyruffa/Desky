var mongoose = require('mongoose')

const CoworkSchema = new mongoose.Schema({
    _id: String,
    nombre: String,
    email: String,
    penalizacion: Number
});



const Cowork = mongoose.model('Cowork', CoworkSchema, 'coworkings')


module.exports = Cowork;