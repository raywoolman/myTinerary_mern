const mongoose = require('mongoose');

const City = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("City",City)