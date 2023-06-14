const express = require('express');
const AWS = require('aws-sdk')
const axios = require('axios')

const startWarController = require('../controllers/startWarController')

const routes = express.Router({ mergeParams: true })

routes.route('/')
  .post(startWarController.createStartWarPeople)
  .get(startWarController.getStartWaPeople)


module.exports = { routes, };