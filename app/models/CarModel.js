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
    // eslint-disable-next-line no-undef
    price: Number,
    production_year: {type: Date, default:Date.now()},
    status_rent_buy:{type: String, default:'buy'} // rent or buy
})

const carModel = mongoose.model('cars', carSchema)

module.exports = carModel