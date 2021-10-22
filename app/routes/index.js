const carsRouter = require('./cars')

module.exports = (app) => {
    app.use('/api/v1/cars', carsRouter)
}