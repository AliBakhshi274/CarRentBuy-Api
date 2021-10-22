const faker = require('faker/locale/fa');
const db = require('../connection');

let counter = 2000;
const cars = [];
while (counter >= 1){
    cars.push({
        id: faker.datatype.uuid(),
        vehicle: faker.vehicle.vehicle(),
        manufacturer: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        fuel: faker.vehicle.fuel(),
        vin: faker.vehicle.vin(),
        color: faker.vehicle.color(),
        vrm: faker.vehicle.vrm(),
        bicycle: faker.vehicle.bicycle(),
        sports: faker.image.sports(),
        price: faker.commerce.price(),
        past: faker.date.past(),
    });
    counter--;
};

const insertCars = async (cars) => {
    const results = await db.collection("cars").insertMany(cars);
};

insertCars(cars);