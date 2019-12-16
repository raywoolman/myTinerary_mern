//https://stackoverflow.com/questions/42381683/how-to-check-if-user-with-email-already-exists
const express = require('express')
const router = express.Router()
const UserModel = require('../models/userModel')
const { check, validationResult } = require('express-validator/check')


router.get('/', (req, res) => {
  userModel
    .findOne({email: req.params.email})
    .then(files => {
      res.send(files)
    })
    .catch(err => console.log(err));
})

.post('/add', [
  check('name')
  .not()
  .isEmpty()
  .withMessage('Name is required')
  // check('email')
  // .not()
  // .isEmpty()
  // .withMessage('Email is required')
  // .isEmail()
  // .withMessage('Invalid Email'),
  // check('email')
  // .not()
  // .isEmpty()
  // .withMessage('Email is required')
  // .isEmail()
  // .withMessage('Invalid Email'),
  // check('password')
  // .not()
  // .isEmpty()
  // .withMessage('Password is required')
],
(req, res) => {
  const errors = validationResult(req);
  console.log(req.body)
  if (!errors.isEmpty()) {
    return res.status(422)
    .send({ errors: errors.array() });
  }
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