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

router.get('/editar/:id', async(req, res)=>{
    const persona = await Personas.findById(req.params.id)
    res.render('Editar',{persona})
})

router.post('/editar/:id',async(req, res)=>{
    const { nombre, edad, telefono, hijos, estadocivil, Libros, Deportes, Musica, Otros } = req.body;
    const intereses = [
        { key:"Libros" , value:(Libros) ? true: false},
        { key:"Deportes" , value:(Deportes) ? true: false},
        { key:"Musica" , value:(Musica) ? true: false},
        { key:"Otros" , value:(Otros) ? true: false},
    ]
    await Personas.findByIdAndUpdate(req.params.id,{nombre,edad, telefono, hijos:(hijos == "Si") ? true:false,estadocivil, intereses})
    res.redirect('/')
})

router.get('/eliminar/:id', async(req, res)=>{
    await Personas.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router;