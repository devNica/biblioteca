var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var expressHbs = require('express-handlebars');
var path = require('path');
var port = process.env.PORT || 4200;


app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: 'hbs'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.use(bodyparser.json());
app.use(express.urlencoded({extended: false}));


var indexRouter = require('./routes/index');

app.use('/index', indexRouter);

app.listen(port, ()=>console.log(`Server is running on port: ${port}`));