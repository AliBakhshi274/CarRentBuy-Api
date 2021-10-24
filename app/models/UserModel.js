const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id : String,
    first_name : String,
    last_name : String,
    email : String,
    phoneNumber : String,
    avatar : String,
    time : {type:Date, default:Date.now()},
    userName : String
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel