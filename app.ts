import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
import nunjucks = require('nunjucks');
import session = require('express-session');

import index = require('./routes/index.ts');

var app = express();

app.set('view engine', 'html');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret: "sosos"}));

app.use('/',index);


app.listen(3000);
//export app;

