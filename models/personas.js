const moogoose = require('mongoose')

const PersonaSchema = new moogoose.Schema({
    nombre:String,
    edad:Number,
    telefono:String,
    estadocivil:String,
    hijos:Boolean,
    intereses:[Object] 
});

module.exports = moogoose.model('personas', PersonaSchema);