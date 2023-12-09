const express = require('express');
const app = express();
const puerto = 80;

const UsuarioController = require('./controllers/UsuarioController');
const EntradaController = require('./controllers/EntradaController');
const ProcesoController = require('./controllers/ProcesoController');
const SalidaController = require('./controllers/SalidaController');
const ReporteController = require('./controllers/ReporteController');
const AnalisisController = require('./controllers/AnalisisController');

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Bienvenido a los inicios de DatAmigo, ingresa un paht para interactual con la base de datos.');
});

app.get('/usuario', UsuarioController.indexGet);
app.get('/usuario/:id([0-9]+)', UsuarioController.itemGet);
app.post('/usuario', UsuarioController.indexPost);

app.get('/entradas', EntradaController.indexGet);
app.get('/entradas/:id([0-9]+)', EntradaController.itemGet);
app.post('/entradas', EntradaController.indexPost);

app.get('/procesos', ProcesoController.indexGet);
app.get('/procesos/:id([0-9]+)', ProcesoController.itemGet);
app.post('/procesos', ProcesoController.indexPost);

app.get('/salidas', SalidaController.indexGet);
app.get('/salidas/:id([0-9]+)', SalidaController.itemGet);
app.post('/salidas', SalidaController.indexPost);

app.get('/reportes', ReporteController.indexGet);
app.get('/reportes/:id([0-9]+)', ReporteController.itemGet);
app.post('/reportes', ReporteController.indexPost);

app.get('/analisis', AnalisisController.indexGet);
app.get('/analisis/:id([0-9]+)', AnalisisController.itemGet);
app.post('/analisis', AnalisisController.indexPost);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});