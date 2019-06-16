const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//Configuraciones
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


//Archivos estaticos

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('form.pug')
});

app.listen(port, () => {
    console.log(`La aplicacion se esta ejecutando en el puerto: ` + port);
})