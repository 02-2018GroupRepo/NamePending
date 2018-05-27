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
            token: token
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
    const userID = results[0].id;
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

router.post(`/getFav`, (req, res)=>{
  const userToken = req.body.token;

  UserModel.getUserByToken(userToken).then(userArray => {
    const userID = userArray[0].id;
    if (userArray.length) {
      UserModel.getFav(userID).then(favorites => {
        var workshopArray = [];
        console.log('favorites: ', favorites);
        const getWorkshop = new Promise((resolve, reject) => {
          favorites.forEach((element, index) => {
            console.log('fetching by element id: ', element.workshopId);
            UserModel.getWorkshops(element.workshopId).then(workshops => {
              workshopArray.push(workshops[0]);
              // console.log(workshops[0]);
              if (index == favorites.length - 1) {
                console.log('resolving workshops'); 
                resolve(workshopArray);
              }
            });
          });
        });

        getWorkshop.then((results) => {
          console.log('winner!', results); 
          res.json({
            msg:"Success",
            workshopArray
          });
        });
      });
    }
  })

})
  

module.exports = router;
