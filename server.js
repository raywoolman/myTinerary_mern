const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

app.use('/cities', require('./routes/cities'))

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});