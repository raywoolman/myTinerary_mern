const express = require('express')
const router = express.Router()
const cityModel = require('../models/cityModel')

router.get('/all', (req, res) => {
  cityModel
    .find({})
    .then(files => {
      res.send(files)
    })
    .catch(err => console.log(err));
})

router.get('/:id', (req, res) => {
  let cityId = req.params.id;
cityModel
  .findById(cityId)
  .then(city => {
    res.send(city)
  })
  .catch(err => console.log(err));
});

router.post('/', (req, res) => {
  const newCity = new cityModel({
      name: req.body.name, 
      country: req.body.country, 
      image: req.body.image
    })
  newCity
    .save()
    .then(city => {
      res.send(city)
    })
    .catch(err => {
      res
        .status(500)
        .send("Server error: ", err)
    })
});

module.exports = router