const express = require('express')
const app = express()

app.use(require('./register'));

module.exports = app;