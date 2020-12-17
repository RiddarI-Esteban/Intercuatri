const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre:{
type: String,
required: [true, 'Ingrese si nombre']
    },

    primer_apellido:{
type: String,
required: [true, 'Ingrese su primer apellido']
    },

    segundo_apellido:{
type: String,
required: [true, 'Ingrese su segundo apellido']
    },

    edad:{
type: Number,
required: [true, 'Ingrese su edad']
    },

    curp:{
type: String,
required: [true, 'Ingrese su CURP'],
unique: true
    },

    telefono:{
type: Number,
required: [true, 'Ingrese su telefono']
    },

    mail:{
type: String,
required: [true, 'Ingrese su email'],
unique: true
    },
activo:{
type: Boolean,
default: true
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);