const mongoose = require('mongoose');

let rolesValidos = {
    values: ["ADMIN", "USER"],
    message: '{VALUE} no es un role válido'
}
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    user: {
        type: String,
        required: [true, 'El nombre es necesario'],
    },
    ID: {
        type: String,
        unique: true,
        required: [true, "El id es necesario"],
    },
    fecha: {
        type: Array,
        required: [true, "La fecha es obligatoria"],
    },
    garantia: {
    type: String,
    required: [true, "La garantia es obligatoria"],
    },
    tipo: {
      type: String,
      required: [true, 'El nombre es necesario'],
    },
  uso: {
  type: String,
  required: [true, "La garantia es obligatoria"],
  },
  puesto: {
    type: String,
    required: [true, "La fecha es obligatoria"],
  },
  proveedor: {
    type: String,
    required: [true, "La garantia es obligatoria"],
  },
  observaciones: {
    type: String,
    required: [true, "la observacion es requerida"],
  },
});

const mongoURI = "mongodb://root:example@10.1.0.16:27017/"; 

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model('Usuario', usuarioSchema)
