const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./keys.js').mongoURI;
console.log(db)
const port = process.env.PORT || 5000;
//db.mongoURI?
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })

.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

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