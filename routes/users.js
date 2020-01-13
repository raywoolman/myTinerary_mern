const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const UserSession = require("../models/userSessionModel");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../keys");
//pass in auth as second param to make route private
const auth = require("../middleware/auth");

let signUpValidation = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name is required"),
  check("email")
    .not()
    .isEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email"),
  check("email")
    .not()
    .isEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Password is required")
];
let serverError = {
  success: false,
  msg: "Error: something went wrong"
};

router
  .post("/add", signUpValidation, async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const err = {};
      errors.array().forEach(error => {
        err[error.param] = error.msg;
      });
      return res.status(422).json({ error: err });
    }

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields required" });
    }

    try {
      let user = await User.findOne({ email });
      if (user)
        return res.status(400).json({ error: "User already registered" });

      user = new User({ name, email });
      user.password = user.generateHash(password);
      user = await user.save().then(
        jwt.sign(
          {
            id: user.id
          },
          keys.jwtSecret,
          //https://www.npmjs.com/package/jsonwebtoken
          //https://jwt.io/introduction/
          {
            expiresIn: 31556926
          },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email
              }
            });
          }
        )
      );
    } catch (err) {
      res.status(500).send({ error: err });
    }

    //needs body of {userId: _id, itineraryId: _id}
  })
  .put("/addfavitinerary", auth, async (req, res) => {
    const { userId, itineraryId } = req.body;
    try {
      let doc = await User.findByIdAndUpdate(userId, {
        $addToSet: {
          favourites: itineraryId
        }
      });
      res.send(doc);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  })
  .post("/login", (req, res) => {
    const { password, email } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, msg: "Both fields required" });
    }
    email.toLowerCase().trim();

    User.findOne({ email }).then(user => {
      if (!user) {
        return res.status(400).json({ email: "User not found" });
      }
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          jwt.sign(
            { id: user.id },
            keys.jwtSecret,
            { expiresIn: 31556926 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          );
        } else {
          return res.status(400).json({ password: "Incorrect password" });
        }
      });
    });
  })
  .post("/logout", (req, res) => {
    //get token
    const token = req.query.token;
    //verify token is unique and exists
    UserSession.findByIdAndUpdate(
      {
        _id: token,
        isDeleted: false
      },
      {
        $set: {
          isDeleted: true
        }
      },
      null,
      (err, sessions) => {
        if (err) {
          console.log(err);
          return res.send({ serverError });
        }

        return res.send({ success: true, message: "success" });
      }
    );
  })
  .get("/verify", auth, (req, res) => {
    User.findById(req.user.id)
      .select("-password")
      .then(user => res.json(user));
  });

module.exports = router;
