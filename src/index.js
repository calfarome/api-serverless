const express = require('express');
const cors = require('cors')

const app = express();

const {routes:starWarRoutes,} = require('./routes/starWarPeople');

// Cors
app.use(cors());
// Registro rutas
app.use('/starWar',starWarRoutes);

module.exports =  app;
