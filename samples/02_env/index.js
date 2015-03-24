var express = require('express');
var redis = require("redis");

var app = express();

app.counter = 0;
app.port = 3000;

app.redis = redis.createClient(44010);

app.redis.on("error", function (err) {
    console.log("Redis error: " + err);
});

app.get('/', function(req, res, next) {
    console.log("GET some_redis_key ");
    app.redis.get("some_redis_key", function(err, value) {
        if (err) {
            res.json({error: err});
        } else {
            if (value) {
                res.json({redis_key_value: value});
            } else {
                res.json({error: "No Redis value set"});
            }
        }
        next();
    });
});

app.get('/set/:value', function(req, res, next) {
    var newValue = req.params.value;
    if (!newValue) {
        res.json({error: "New value missing, must be /set/new_value"});
        return next();
    }
    console.log("SET some_redis_key " + newValue);
    app.redis.set("some_redis_key", newValue, function(err, value) {
        if (err) {
            res.json({error: err});
        } else {
            res.json({redis_key_value: newValue});
        }
        next();
    });
});

app.listen(app.port, function() {
    console.log("Server is running on port " + app.port);
});
