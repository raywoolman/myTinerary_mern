const express = require('express')
const router = express.Router()
const userModel = require('../models/userModel')

router.get('/all', (req, res) => {
  userModel
    .find({})
    .then(files => {
      res.send(files)
    })
    .catch(err => console.log(err));
})

// router.get('/:id', (req, res) => {
//   let cityId = req.params.id;
// cityModel
//   .findById(cityId)
//   .then(city => {
//     res.send(city)
//   })
//   .catch(err => console.log(err));
// });

// router.post('/', (req, res) => {
//   const newCity = new cityModel({
//     })
//   newCity
//     .save()
//     .then(city => {
//       res.send(city)
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send("Server error: ", err)
//     })
// });

module.exports = router