const express = require('express')
const router = express.Router()
const itineraryModel = require('../models/itineraryModel')

router.get('/all', (req, res) => {
  itineraryModel
    .find({})
    .then(files => {
      res.send(files)
    })
    .catch(err => console.log(err));
});

module.exports = router