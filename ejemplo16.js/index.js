const path = require('path');
var express = require('express');
var app = express();

const PORT = 3000
const estudiantes = [
  {id:0, nombre:"Joel DosPunto",edad:230},
  {id:1, nombre:"Alix Viloria",edad:25},
  {id:2, nombre:"Jomel McDonald",edad:25}
];

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.get('/api/v1/estudiantes/', function (req, res) {
  const resp = {estudiantes,count: estudiantes.length}
  res.json(resp);
});

app.get('/api/v1/estudiantes/:id', (req, res) => {
  const { params:{id }} = req;
  res.json(estudiantes[id]);
});

app.get('/estudiantes',(req,res) =>{
    res.render("estudiantes/list.pug")
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

//Documentacion https://expressjs.com/es/guide/routing.html

//Instalar postman

//Nodemon https://www.npmjs.com/package/nodemon