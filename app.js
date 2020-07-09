var express = require('express');
var path = require('path');
var app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/home.html'));
});

app.listen(PORT, () => {
    console.log('Server started on port:' + PORT);
});