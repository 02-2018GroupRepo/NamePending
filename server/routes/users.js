const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
})
.post('/validate', (req, res, next) => {
  UserModel.getUserByToken(req.body.token)
           .then(results => {
             if (results.length !== 0) res.json({isValid: true})
             else res.json({isValid: false})
           })
           .catch(e => res.json({isValid: false}));
})

module.exports = router;
