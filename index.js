const express = require('express');
const SubjectRoutes = require('./subjects');

const subjectRoutes = SubjectRoutes();

const app = express();

app.get('/', function(req, res){
    res.send('LetsTutor');
});

app.get('/subjects', subjectRoutes.index);
app.get('/subjects/add/:subject', subjectRoutes.add);

const port = 3007;

app.listen(port, function(){
    console.log('Web app started on port : ' + port);
});
