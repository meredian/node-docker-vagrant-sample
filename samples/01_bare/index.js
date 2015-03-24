var express = require('express');
var app = express();

app.counter = 0;
app.port = 3000;

app.get('/', function(req, res, next) {
    console.log("Counter request received; return value: " + app.counter);
    res.json({ counter: app.counter++ });
});

app.listen(app.port, function() {
    console.log("Server is running on port " + app.port);
});
