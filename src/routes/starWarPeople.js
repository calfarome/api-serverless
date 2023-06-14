const express = require('express');
const AWS = require('aws-sdk')
const axios = require('axios')

const starWarController = require('../controllers/starWarController')

const routes = express.Router({ mergeParams: true })

routes.route('/')
  .post(starWarController.createStarWarPeople)
  .get(starWarController.getStarWaPeople)


module.exports = { routes, };