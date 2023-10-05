const express = require('express');
const Usuario = require('./../models/user');
const app = express();

 
app.post('/register', function (req, res) {
    let body = req.body;

    let { nombre, id, fecha, garantia } = body;
    let usuario = new Usuario({
      nombre,
      id,
      fecha,
      garantia,
    });

    usuario.save((err, usuarioDB) => {
      if (err) {
          return res.status(400).json({
              ok: false,
              err,
          });
      }

      res.json({
          ok: true,
          usuario: usuarioDB
      });

    })
});

module.exports = app;