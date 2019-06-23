const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');

const { sumaArreglo } = require('./utils/functions.js');

//Configuraciones
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser());


//Archivos estaticos

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('mainmenu.pug')
});

app.get('/lab/lab8', (req, res) => {
    res.render('lab8.pug')
});

app.get('/lab/lab9', (req, res) => {
    res.render('lab9.pug')
});

app.get('/lab/lab10', (req, res) => {
    res.render('lab10.pug')
});

app.post('/lab/lab8', (req, res) =>{
    const { arr } = req.body;
    res.json({message: `La suma del arreglo es : ${sumaArreglo(arr)}`});
});

app.listen(port, () => {
    console.log(`La aplicacion se esta ejecutando en el puerto: ` + port);
})