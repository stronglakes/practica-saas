const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pblic/index.html');
});

app.post('/seleccion', (req, res) => {
    const opcionSeleccionada = req.body.opcion;
    res.send('Has seleccionado la opción: ${opcionSeleccionada} ');
});

app.listen(port, () => {
    console.log('La aplicación está corriendo en http://localhost:${port}');
});


