const express = require('express')
const router = express.Router()
const UserModel = require('../models/userModel')

router.get('/', (req, res) => {
  userModel
    .find({})
    .then(files => {
      res.send(files)
    })
    .catch(err => console.log(err));
})

.post('/add', (req, res, next) => {
    let newUser = new UserModel(req.body);
    newUser
    .save()
    .then(doc => {
        res.send(doc)
    })
    .catch(err => {
        res.status(500)
        .send("Server error: ", err)
    })
});

module.exports = router;