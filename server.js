const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
    res.send({ hello: 'world' });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

router.get('/', function (req, res) {
    res.send("I'm the home page");
});

router.get('/about', function (req, res) {
    res.send("I'm the about page")
})



app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));