const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');

const { getSquare } = require('../ejemplo061719.js');

//Configuraciones
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser());


//Archivos estaticos

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('form.pug')
});

app.post('/', (req, res) =>{
    const { number } = req.body;
    res.json({message: `El numero es ${getSquare(number)}`});
});

app.listen(port, () => {
    console.log(`La aplicacion se esta ejecutando en el puerto: ` + port);
})