const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const SubjectRoutes = require('./subjects');

const subjectRoutes = SubjectRoutes();

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    res.send('LetsTutor');
});

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/subjects', subjectRoutes.index);
app.get('/subjects/add', subjectRoutes.addScreen);
app.post('/subjects/add', subjectRoutes.add);

const port = 3007;

app.listen(port, function(){
    console.log('Web app started on port : ' + port);
});
