const express = require('express')
const app = express()
const PORT = 3000;

app.get('/', function (req, res) {
    const profesor = {
        name: "Erick Agrazal",
        age: "28",
    };
    res.json(profesor);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`)
});

//Documentacion https://expressjs.com/es/guide/routing.html

//Instalar postman

//Nodemon https://www.npmjs.com/package/nodemon