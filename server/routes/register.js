const express = require('express');
const Usuario = require('./../models/machine.js');
const app = express();

 
app.post('/machine', function (req, res) {
    let body = req.body;

    let { user, ID, fecha, garantia, month, days, uso, puesto, proveedor, observacion, tipo} = body;
    let usuario = new Usuario({
      user, 
      ID,
      garantia, 
      month, 
      days, 
      fecha, 
      tipo, 
      proveedor, 
      uso, 
      observacion, 
      puesto,
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
