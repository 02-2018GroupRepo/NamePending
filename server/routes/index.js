var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const randToken = require('rand-token');
const UserModel = require('../models/UserModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})
.post('/', (req, res, next) => {
  email = req.body.email;
  password = req.body.password;
  firstName = req.body.firstName;
  lastName = req.body.lastName;
  phone = req.body.phone;
  address = req.body.address;
  let token = randToken.uid(60);
  
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      UserModel.insertNewUser(email, hash, firstName, lastName, phone, address, token);      
      res.cookie('token', token);
      res.end();
    });
});
});

module.exports = router;
