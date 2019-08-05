const express = require('express');
const router = express.Router();

const Personas = require('../models/personas')

router.get('/', async(req, res)=>{
    const personas = await Personas.find();
    res.render('Index', {personas})
})

router.get('/crear', (req, res)=>{
    res.render('Crear')
})

router.post('/crear',async(req, res)=>{
    const { nombre, edad, telefono, hijos, estadocivil, intereses_L, intereses_D, intereses_M, intereses_O } = req.body;
    const intereses = [
        { key:"Libros" , value:(intereses_L) ? true: false},
        { key:"Deportes" , value:(intereses_D) ? true: false},
        { key:"Musica" , value:(intereses_M) ? true: false},
        { key:"Otros" , value:(intereses_O) ? true: false},
    ]
    const Persona = new Personas({nombre,edad, telefono, hijos:(hijos == "Si") ? true:false,estadocivil, intereses})
    await Persona.save();
    res.redirect('/')
})

module.exports = router;