const mongoose = require('mongoose');

const Itinerary = new mongoose.Schema({
    parentCityID: {
    type: Number,
    required: true
    },
    rating: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    tags: {
        type: Array,
        required: false
    }
})

module.exports = mongoose.model("Itinerary", Itinerary)