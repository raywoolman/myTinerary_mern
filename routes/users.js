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
}).post('/signin', (req, res, next) => {
  const {body} = req;
  const {password} = body;
  let {email} = body;

  if (!email) {
    return res.send({success: false, message: 'Error: Email cannot be blank'});
  }
  if (!password) {
    return res.send({success: false, message: 'Error: Password cannot be blank'})
  }

  //refactor
  email = email.toLowerCase();
  email = email.trim();

  //refactor
  User.find({
    email: email
  }, (err, users) => {
    if (err) {
      console.log('Error 2: ', err);
      return res.send(serverError)
    }
    if (users.length != 1) {
      return res.send(serverError)
    }

    const user = users[0];
    if (!users.validPassword(password)) {
      return res.send(serverError)
    }
    const userSession = new UserSession();
    userSession.userId = user._id;
    userSession.save((err, doc) => {
      if (err) {
        console.log(err);
        return res.send(serverError)
      }
      return res.send({success: true, message: 'Valid signin', token: doc._id})
    })
  })
}).post('/logout', (req, res, next) => {
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
}).post('/verify', (req, res, next) => {
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

let serverError = {
  success: false,
  message: 'Error: something went wrong'
}

module.exports = router