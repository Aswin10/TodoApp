var express = require('express'), //imports expressjs
    app = express(),
    port = process.env.PORT || 3203;
mongoose = require('mongoose'),
    Task = require('./api/models/appmodel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dodb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/approutes');
routes(app);

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);