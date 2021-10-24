const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    id : String,
    vehicle: String,
    manufacturer: String,
    model: String,
    type: String,
    fuel: String,
    color: String,
    car_image: String,
    price: Double,
    production_year: {type: Date, default:Date.now()},
})

const carModel = mongoose.model('cars', carSchema)

module.exports = carModel