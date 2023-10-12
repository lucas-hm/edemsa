require('./server/config/config');
//
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
// Middleware para analizar datos JSON en las solicitudes POST
app.use(bodyParser.json());

// Ruta para guardar datos en la base de datos
app.post('/machine', async (req, res) => {
  console.log(req.body)
  let insertUser = await DB_coleccion.insertOne(req.body)
  res.send({"msg":"everything went correctly"})
});

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB Connection Error:', error);
});

app.listen(process.env.PORT, ()=> {
    console.log("Escuchando en http://10.1.0.16:4000");
})
