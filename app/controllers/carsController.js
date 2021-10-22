const carsList = (req, res, next) => {
    res.send({
        success: true,
        message: 'Success!'
    })
}

module.exports = {
    carsList
}