const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    favourites: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("User", User)