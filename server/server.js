var path = require("path");
var express = require('express');

var app = express();

app.use('/js', express.static(path.join(process.cwd(), 'public/app')));
app.use('/js', express.static(path.join(process.cwd(), 'public/common')));
app.use('/js', express.static(path.join(process.cwd(), 'public/libs')));

app.use('/css', express.static(path.join(process.cwd(), 'public/css')));
app.use('/css', express.static(path.join(process.cwd(), 'public/libs')));

app.use(express.static(path.join(process.cwd(), 'public')));

app.use("/", function(req, res) {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

module.exports = app;
