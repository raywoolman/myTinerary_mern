const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const expressValidator = require('express-validator')
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./keys').mongoURI;
const mongoose = require("mongoose");

const cities = require('./routes/cities');
const itineraries = require('./routes/itineraries');
const users = require('./routes/users');

app.use(bodyParser.json());
app.use(expressValidator());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/cities', cities)
app.use('/itineraries', itineraries)
app.use('/user', users)

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

mongoose.connect(db,{ useNewUrlParser: true, dbName: "mytinerary" })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));
