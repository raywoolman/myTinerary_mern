const mongoose = require('mongoose');

const Itinerary = new mongoose.Schema({
  parentCityID: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  //author keys: name, img, id
  author: {
    type: Object,
    required: false
  },
  rating: {
    type: Number,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  likes: {
    type: Number,
    required: false
  },
  //comments obj. keys: author_id, author_img, author_name, date, body
  comments: {
    type: Array,
    required: false
  },
  //duration: minutes
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