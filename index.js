const express = require('express');
const exphbs = require('express-handlebars');

const SubjectRoutes = require('./subjects');

const subjectRoutes = SubjectRoutes();

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    res.send('LetsTutor');
});

app.use(express.static('public'));

app.get('/subjects', subjectRoutes.index);
app.get('/subjects/add/:subject', subjectRoutes.add);

const port = 3007;

app.listen(port, function(){
    console.log('Web app started on port : ' + port);
});
