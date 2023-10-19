require('./server/config/config');
//
const path = require('path');
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const URL = "mongodb://root:example@10.1.0.16:27017/"; //url de coneccion a Mongodb

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

app.get('/', (req, res)=> {
  const index = path.resolve(__dirname,'./public', './page', 'index.html' );
  res.sendFile(index);
});

app.get('/listado', function (req, res) {
  returnData().then(result => {
    console.log(result); //This logs undefined
    res.send(result); //This sends undefined
  });
 const listado = path.resolve(__dirname, './public', './page', 'listado.html');
 res.sendFile(listado);
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

async function returnData() {
  const uri = "mongodb://root:example@10.1.0.16:27017/";

  //Connect to the database and return all documents in the collection
  const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
  try {
      await client.connect();
      const database = client.db('data');
      const collection = database.collection('edemsa');
      const query = {};
      const options = {};
      const cursor = collection.find(query, options);
      await cursor.toArray().then((docs) => {
          console.log(docs); // <- This works and logs all the data to console 
          return docs;
      });
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}
