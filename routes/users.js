const express = require('express')
const router = express.Router()
const userModel = require('../models/userModel')

router.get('/', (req, res) => {
  userModel
    .find({})
    .then(files => {
      res.send(files)
    })
    .catch(err => console.log(err));
})

router.post('/add', (req, res) => {
    const newUser = new userModel({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    })
    newUser
    .save()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500)
        .send("Server error: ", err)
    })
});

module.exports = router;