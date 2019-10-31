const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./keys').mongoURI;
const mongoose = require("mongoose");


const cities = require('./routes/cities');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use('/cities', cities)

mongoose.connect(db, { useNewUrlParser: true, dbName: "mytinerary" })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

app.listen(port, () => {
  console.log("Server is running on port " + port);
});