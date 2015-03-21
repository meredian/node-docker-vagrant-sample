var express = require('express');
var app = express();

app.counter = 0;
app.port = 3000;

app.get('/sample', function(req, res, next) {
    console.log("Counter request received; return value: " + app.counter);
    res.json({ counter: app.counter++ });
});

app.listen(app.port, function() {
    console.log("Frontend is running on port " + app.port);
});
