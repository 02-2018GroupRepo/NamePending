const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const randToken = require('rand-token');
const UserModel = require('../models/UserModel');
const WorkshopsModel = require('../models/WorkshopsModel');
const twilioClient = require('../twilioConfig');
const config = require('../config/config');
const enableTwilio = true;

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
  let userPhoneNumber = "+1";

  UserModel.getUserByToken(userToken).then(results =>{
    const userID = results[0].id;
    userPhoneNumber += results[0].phone;
    if (results.length > 0){
      UserModel.insertFavorite(workShopId, userID)
               .then((results) => {
                 sendConfirmationText(workShopId, userPhoneNumber);
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

  router.post('/checkButton', (req, res)=>{
    const userToken = req.body.token;
    console.log("I'm checking button")
    UserModel.getUserByToken(userToken).then(userArray => {
        const userID = userArray[0].id;
        if (userArray.length) {
          UserModel.getFav(userID).then(favorites => {
            res.json({
            favArray: favorites
            })
          })
        }
    })
  })  



const sendConfirmationText = (workshopId, phoneNumber) => {
  WorkshopsModel.getWorkshopById(workshopId)
                .then(result => {
                  if (enableTwilio) {
                    let message = `Confirmed: ${result[0].name} workshop on ${result[0].date} at ${result[0].time}`;
                    twilioClient.messages.create({
                      body: message,
                      to: phoneNumber,  // Text this number
                      from: config.twilioPhoneNumber // From a valid Twilio number
                    }).then(result => console.log(result))
                      .catch(e => console.log(e));
                  }
                })
                .catch(e => console.log(e));
}
  

module.exports = router;
