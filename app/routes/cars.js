const express = require('express');
const carsController = require('../controllers/carsController')
const routers = express.Router();

routers.get('/', carsController.carsList)

module.exports = routers