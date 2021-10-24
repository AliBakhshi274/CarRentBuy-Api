const CarModel = require('../models/CarModel')
var uuid = require('uuid');


const carsList = async (req, res, next) => {

    const cars = await CarModel.find({})
    
    try {
        res.send({
            success: true,
            message: 'Success!',
            data:{
                cars
            }
        })

    } catch (error) {
        next(error);
    }
}

const insertCar = async (req, res, next) => {

    try {

        const newCar = new CarModel({
            id: uuid.v4(),
            vehicle: req.body.vehicle,
            manufacturer: req.body.manufacturer,
            model: req.body.model,
            type: req.body.type,
            fuel: req.body.fuel,
            color: req.body.color,
            car_image: 'https://static3.gostaresh.news/servev2/HryZhOyyt4bY/5Uwvb7W7Zm0,/%D9%BE%D8%B1%D8%A7%DB%8C%D8%AF.jpg',
            price: req.body.price,
        })
        await newCar.save()

        res.send({
            status: true,
            message: 'the new car successfully created!',
            new_car_id: newCar.id
        })

    } catch (error) {
        next(error)
    }

}


module.exports = {
    carsList,
    insertCar
}