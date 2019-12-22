const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const UserSession = require('../models/userSessionModel')
const {check, validationResult} = require('express-validator/check')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../keys')

let signUpValidation = [
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
let serverError = {
  success: false,
  message: 'Error: something went wrong'
}

router.post('/add', signUpValidation, async(req, res) => {
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

    user = new User({name, email});
    user.password = user.generateHash(password)
    user = await user.save();
    res.send(user);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({error: err});
  }

  //needs body of {userId: _id, itineraryId: _id}
}).put('/addfavitinerary', async(req, res) => {
  const {userId, itineraryId} = req.body
  try {
    let doc = await User.findByIdAndUpdate(userId, {
      $addToSet: {
        favourites: itineraryId
      }
    })
    res.send(doc)
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({error: err});
  }

}).post('/login', (req, res) => {
  const {password, email} = req.body;

  if (!email || !password) {
    return res.send({success: false, message: 'Both fields required'});
  }
  email
    .toLowerCase()
    .trim()

  User
    .findOne({email})
    .then(user => {
      if (!user) {
        return res
          .status(404)
          .json({email: 'Email not found'});
      }
      bcrypt
        .compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id,
              name
            } = user;
            jwt.sign(payload, keys.secretOrKey, {
              expiresIn: 31556926
            }, (err, token) => {
              res,
              json({
                success: true,
                token: "Bearer" + token
              })
            });
          } else {
            return res
              .status(400)
              .json({password: "Incorrect password"})
          }
        })
    })
}).post('/logout', (req, res) => {
  //get token
  const {query} = req;
  const {token} = query;
  //verify token is unique and exists
  UserSession.findByIdAndUpdate({
    _id: token,
    isDeleted: false
  }, {
    $set: {
      isDeleted: true
    }
  }, null, (err, sessions) => {
    if (err) {
      console.log(err);
      return res.send({serverError})
    }

    return res.send({success: true, message: 'success'})
  })
}).post('/verify', (req, res) => {
  //get token
  const {query} = req;
  const {token} = query;

  //verify token is unique and exists

  UserSession.find({
    _Id: token,
    isDeleted: false
  }, (err, sessions) => {
    if (err) {
      console.log(err);
      return res.send(serverError)
    }
    if (sessions.length != 1) {
      return res.send(serverError)
    } else {
      //success
      return res.send({success: true, message: 'success!'})
    }
  })
})

module.exports = router