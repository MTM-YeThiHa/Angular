require ("dotenv").config();
var express = require('express');
var path = require('path');
const passwordReset = require("./routes/passwordReset");
const users = require ("./routes/users");
const connection = require('./database/db');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var auth = require('./routes/auth');
var category = require('./routes/category');
var post = require('./routes/post');
var cors = require ('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { connect } = require("http2");

var app = express();

connection();

app.use(cors())
app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', auth);
app.use('/api/category', category);
app.use('/api/post', post);
app.use('/api/public', indexRouter);
app.use('/users', usersRouter);
app.use("/api/users", users);
app.use("/api/password-reset", passwordReset);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${ port }...`));

module.exports = app;
