var app = require('./server/server');

var port = 3000;
app.listen(port || 5000, function(){
    console.log('Server listening on port: ', port);
});
