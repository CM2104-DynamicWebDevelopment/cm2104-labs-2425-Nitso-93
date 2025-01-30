var express = require('express');
var knockknock=require('knock-knock-jokes');
var app = express();

//Main Route
app.get('/', function(req, res)
{
    res.send("Hello World! by Express");
});

//Extra Route
app.get('/test', function(req,res)
{
    res.send("this is route 2");
});

// Knock Knock Joke Route
app.get('/joke', function(req,res)
{
    res.send(knockknock());
});

//Query/Addition Route
app.get('/add', function(req,res)
{
    var x= parseInt(req.query.x);
    var y= parseInt(req.query.y);
    res.send("X + Y = "+(x+y));
});

app.listen(8080);