const keys = require("../keys");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  //check for token
  if (!token) return res.status(401).json({ msg: "Unauthorised" });
  try {
    //verify token
    const decoded = jwt.verify(token, keys.jwtSecret);

    //add user from payload
    req.user = decoded;

    next();

  } catch (err) {
    res.status(400).json({ msg: "invalid token" });
  }
}

module.exports = auth;