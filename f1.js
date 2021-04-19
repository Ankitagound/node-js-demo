var express = require('express');
var app = express();

app.get('/slogan', function(req, res)
{
    res.send("hey! welcome to my first website...");
});

app.listen(3000);

