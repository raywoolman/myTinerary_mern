const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/all', (req, res) => {
    res.send("I'm the cities page")
})

app.use('/cities', router)
app.listen(port, () => console.log(`Listening on port ${port}`));
