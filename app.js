const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodeMailer = require('nodemailer');

const app = express();

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(3000, () => console.log('server started...'));