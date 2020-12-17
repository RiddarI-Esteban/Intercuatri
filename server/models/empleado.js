const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let empleadoSchema = new Schema({
    nombre_del_puesto:{
type: String,
required: [true, 'Se requiere el nombre del puesto']
    },

    anios_servicio: {
type: Number,
required: [true, 'Se requieres mostrar los años de servicio']
    },

    hora_entrada: {
type: Number,
required: [true, 'Su hora de entrada es desde']
    },

    hora_salida: {
type: Number,
required: [true, 'Su hora de entrada es asta']
    },

    activo: {
type: Boolean,
default: true
    },

    id_usuario:{
type: Schema.Types.ObjectId,
ref: 'Usuario'

    },
    
    id_departamento: {
type: Schema.Types.ObjectId,
ref: 'Departamento'
    }
});

module.exports = mongoose.model('Empleado', empleadoSchema);