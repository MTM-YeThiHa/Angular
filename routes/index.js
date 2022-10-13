var express = require('express');
const { rawListeners } = require('../app');
const passport = require('../config/passport');
var router = express.Router();
var Category = require("../models/Category");
var Post = require("../models/Post");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/category', function(req, res, next) {
  Category.find(function (err, categories) {
    if (err) return next(err);
    res.json(categories);
  });
});

router.get('/bycategory/:id', function(req, res, next) {
  Post.find({category: req.params.id}, function (err, posts) {
    if (err) return next(err);
    res.json(posts);
  });
});

router.get('/post', function(req, res, next) {
  Post.find(function (err, posts) {
    if (err) return next(err);
    res.json(posts);
  });
});

router.get('/post/:id', function(req, res, next) {
  Post.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/login', function(req, res) {
  if(!req.body.username || !req.body.password) {
    res.json({ success: false, msg: 'Please pass username and password. '});
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    //save the user
    newUser.save(function(err) {
      if(err) {
        return res.json({ success: false, msg: 'Username already exists.'});
      }
      res.json({ success: true, msg: 'Successful created new user. '});
    });
  }
});

router.post('/register', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user){
    if (err) throw err;

    if(!user) {
      res.status(401).send({ success: false, msg: 'Authentication failed. User not found. '});
    } else {
      //check if password matches
      user.comparePassword(req.body.password, function( err, isMatch) {
        if (isMatch && !err) {
          //if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), config.secret);
          // return the information including token as JSON
          res.json({ success: true, token: 'JWT' + token});
        } else {
          res.status(401).send({ success: false, msg: 'Authentication failed. Wrong Password'});
        }
      });
    }
  });
});

router.post('/logout', passport.authenticate('jwt', { session: false}), function(req, res) {
  req.logout();
  res.json({ success: true });
})

module.exports = router;
