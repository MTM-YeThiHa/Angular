var express = require('express');
var router = express.Router();
const { User, validate } = require("../models/users")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post("/forgetpassword", async (req, res) => {
//   try {
//     const { error } = validate(req.body);
//     if(error) return res.status(400).send(error.details[0].message);

//     const user = await new User(req.body).save();

//     res.send(user);
//   } catch (error) {
//     res.send("An error occured");
//     console.log(error);
//   }
// });

module.exports = router;
