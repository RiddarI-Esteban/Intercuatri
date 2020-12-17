const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let departamentoSchema = new Schema({
    nombre: {
type: String,
required: [true, 'Coloque su nombre aqui']
    },

    
    numero_empleados: {
type: Number,
required: [true, 'Coloque el numero de empleados aqui']
    },


    extension_telefonica: {
type: Number,
required: [true, 'Coloque su extencion telefonica aqui']
    },


    activo: {
type: Boolean,
default: true
    },


    id_jefe_de_area: {
type: Schema.Types.ObjectId,
ref:'Usuario'
    }
});

module.exports = mongoose.model('Departamento', departamentoSchema);