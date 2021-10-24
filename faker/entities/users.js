const faker = require('faker/locale/fa');
const db = require('../connection');

let counter = 2000;
const users = [];
while (counter >= 1) {
    users.push({
        id: faker.datatype.uuid(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        avatar: faker.internet.avatar(),
        time: faker.time.recent(),
        userName: faker.internet.userName(),
        city: faker.address.city(),
    });
    counter--;
};


const insertUsers = async (users) => {
    const results = await db.collection("users").insertMany(users);
};

insertUsers(users);