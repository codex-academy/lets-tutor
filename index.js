const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('LetsTutor');
});

const port = 3007;

app.listen(port, function(){
    console.log('Web app started on port : ' + port);
});
