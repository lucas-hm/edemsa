require('./server/config/config');

const path = require('path');
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const URL = "mongodb://root:example@10.1.0.16:27017/data/edemsa"; //url de coneccion a Mongodb

const cliente = new MongoClient(URL);

const dbnombre = "data";
const coleccion = "edemsa";
let DB_coleccion = cliente.db(dbnombre).collection(coleccion); //node_prueba.Usuarios

app.use(bodyParser.urlencoded({
  extended: true
}));
// parse application/json
app.use(bodyParser.json())

app.use(express.json({ type: "*/*" }))

app.use(cors())

// Configuracion global de rutas
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/server"));
app.use(express.json());

app.get('*', (req, res)=> {
  const index = path.resolve(__dirname,'./public', './page', 'index.html' );
  res.sendFile(index);
});

mongoose.connect('mongodb://root:example@10.1.0.16:27017/data/edemsa', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Definir un esquema para los datos que deseas almacenar
const machineSchema = new mongoose.Schema({
  user: String,
  ID: String,
  garantia: Number,
  fecha: String,
});

// Crear un modelo a partir del esquema
const Machine = mongoose.model('Machine', machineSchema);

// Middleware para analizar datos JSON en las solicitudes POST
app.use(bodyParser.json());

// Ruta para guardar datos en la base de datos
app.post('/crearCuenta', async (req, res) => {
  try {
    const { user, ID, garantia, month, days } = req.body;
    const machine = new Machine({ user, ID, garantia, month, days });
    await machine.save();
    res.status(201).json({ message: 'Datos guardados con éxito' });
  } catch (error) {
    console.error('Error al guardar datos:', error);
    res.status(500).json({ error: 'Hubo un error al guardar los datos' });
  }
});

// hmoe page to watch a list of all the machines
app.get('/', function(req, res) {
  res.render('pages/home');
});

app.listen(process.env.PORT, ()=> {
    console.log("Escuchando en 10.1.0.16:4000");
})
