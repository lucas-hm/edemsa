require('./server/config/config');

const path = require('path');
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const URL = ""; //url de coneccion a Mongodb



const cliente = new MongoClient(URL);

const dbnombre = "users";
const coleccion = "Usuarios";
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
  const index = path.resolve(__dirname, '../Proyecto', './public', './page', 'index.html' );
  res.sendFile(index);
});

app.post('/crearCuenta', async (req, res)=>{
  console.log(req.body)
  let insertUser = await DB_coleccion.insertOne(req.body)
 res.send({"msg":"everything went correctly"})
})
app.listen(process.env.PORT, ()=> {
    console.log("Escuchando en http://127.0.0.1:4000");
})