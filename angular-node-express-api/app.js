const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const cookieSession = require('cookie-session');

mongoose.connect(config.db, {
  useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connect');
});

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const singupRouter = require('./routes/singup');
const profileRouter = require('./routes/profile');

var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cookieSession({
    name: 'session',
    keys: config.keySession,

    maxAge: config.maxAgeSession
  })
);

app.use('/api/login', loginRouter);
app.use('/api/singup', singupRouter);
app.use('/api/profile', profileRouter);
app.use('/api/', indexRouter);

module.exports = app;
