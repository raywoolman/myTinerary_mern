const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const UserSession = require('../models/userSessionModel')
const {check, validationResult} = require('express-validator/check')

let validation = [
  check('name')
    .not()
    .isEmpty()
    .withMessage('Name is required'),
  check('email')
    .not()
    .isEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid Email'),
  check('email')
    .not()
    .isEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid Email'),
  check('password')
    .not()
    .isEmpty()
    .withMessage('Password is required')
];

router.post('/add', validation, async(req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = {};
    errors
      .array()
      .forEach(error => {
        err[error.param] = error.msg;
      });
    return res
      .status(422)
      .json({errors: err});
  }

  const {name, email, password} = req.body;

  try {
    let user = await User.findOne({email});
    if (user) 
      return res.status(400).send("User already registered")

    user = new User({name, email, password});
    // const salt = await bcrypt.genSalt(10); user.password = await
    // bcrypt.hash(user.password, salt);
    user = await user.save();
    res.send(user);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send("Something went wrong");
  }
})

module.exports = router