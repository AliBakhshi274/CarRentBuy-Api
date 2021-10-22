const express = require('express')
const app = express()

require('./middlewares')(app)
require('./routes')(app)
require('./middlewares/exception')(app)
require('./middlewares/404')(app)

module.exports = (port) => {
    app.listen(port, () => {
        console.log(`listening on port: ${port}`)
    })
}