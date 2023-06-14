const express = require('express');
const cors = require('cors')

const app = express();

const {routes:startWarRoutes,} = require('./routes/startWarPeople');

// Cors
app.use(cors());
// Registro rutas
app.use('/startWar',startWarRoutes);

module.exports =  app;
