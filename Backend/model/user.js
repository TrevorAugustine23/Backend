const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Uname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
    },
    avatar: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('User', userSchema)
