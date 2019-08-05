const express = require('express');
const app = express();

//Database
require('./models/database');

//Settings
app.set('PORT', process.env.PORT || 3000);
app.set('view engine', 'ejs'); //View engine

//Static Files
app.use(express.static('./public'));

//Middlewares
app.use(express.urlencoded({extended:false}))

//Routes
app.use(require('./routes/personas.routes'))

//Server
app.listen(app.get('PORT'), ()=> console.log('El servidor esta corriendo.'));