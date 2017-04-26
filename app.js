const express = require('express');

const about = require('./handlers/about');
const tweets = require('./handlers/tweets');
const root = require('./handlers/root');


const app = express();

app.set('view engine', 'ejs')
app.set('views', './views');

app.get('/', root);

app.get('/about', about);

app.get('/tweets', tweets);

app.listen(8080);
