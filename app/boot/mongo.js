const mongoose = require('mongoose')
const { MONGO_HOST, MONGO_DB_NAME, MONGO_PORT } = process.env

mongoose.connection.on('error', error => {
    console.log('mongodb connection failed!', error.message)
})

const startMongoDb = () => {

    mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
}

module.exports = startMongoDb