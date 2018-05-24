const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const randToken = require('rand-token');
const UserModel = require('../models/UserModel');

/* GET home page. */
router.post('/signup', (req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = req.body.phone;
  const address = req.body.address;
  const token = randToken.uid(60);

  bcrypt.genSalt(10, (error, salt)=>{
    if(error){throw error;}
    bcrypt.hash(password, salt, (error,hash)=>{
      if(error){throw error;}
      UserModel.insertNewUser(email, hash, firstName, lastName, phone, address, token);

      res.json({
        token: token,
        msg: "signupSuccess"
      });
    });
  });
})

router.post('/login', (req, res)=>{
  const email = req.body.email;
  const password = req.body.password;
  const token = randToken.uid(60);

  UserModel.getUserByEmail(email).then(results =>{
    bcrypt.compare(password, results[0].password, (error, result)=>{
      if(result){
        UserModel.updateToken(email, token).then((user)=>{
          res.json({
            msg: "login success",
            token: user.token
          })
        });
      }
      else{
        res.status(304);
      }
    })
});
  })

router.post('/addToCalendar', (req, res)=>{
  const workShopId = req.body.workShopId;
  const userToken = req.body.token;

  UserModel.getUserByToken(userToken).then(results =>{
    const userID = 1;
    console.log(results)
    if (results.length > 0){
      UserModel.insertFavorite(workShopId, userID)
               .then((results) => {
                 res.json({
                   msg: "WorkShopAdded"
                  })
                })
    } else {
      res.json({
        msg: "Workshop not added."
      })
    }
  });

  });
  




module.exports = router;
