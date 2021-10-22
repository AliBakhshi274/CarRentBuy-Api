const express = require('express')
const app = express()
 

module.exports = (port) => {
    app.listen(port, () => {
        console.log(`listening on port: ${port}`)
    })
}