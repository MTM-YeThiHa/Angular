const express = require('express');

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://thiha:yth$4481@cluster0.brtiowx.mongodb.net/articles', {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true
}).then(() => console.log('connection successful'))
    .catch((err) => console.log(err));