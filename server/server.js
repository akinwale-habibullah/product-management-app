var path = require("path");
var express = require('express');

var app = express();

app.use(express.static(path.join(process.cwd(), 'public')));
app.use("/", function(req, res){
    res.sendFile(path.join(process.cwd(), 'public', 'views', 'index.html'));
});

module.exports = app;
