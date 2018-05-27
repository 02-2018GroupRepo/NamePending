const express = require('express');
const router = express.Router();
const StoreModel = require('../models/StoreModel');
const WorkshopsModel = require('../models/WorkshopsModel');
const UserModel = require('../models/UserModel');

router.get('/stores', (req, res) => {
    StoreModel.getAllStores()
              .then(results => res.json(results))
              .catch(e => res.status(400).end());
})
.get('/workshops', (req, res) => {
    WorkshopsModel.getAllWorkshops()
                  .then(results => res.json(results))
                  .catch(e => res.status(400).end());
})
.post('/favorites', (req, res) => {

    UserModel.getUserByToken(req.body.token)
             .then(user => UserModel.getFavoritesByUserId(user[0].id)
                                    .then(favorites => WorkshopsModel.getWorkshopsByIds(favorites)
                                                                     .then(data => {console.log(data)
                                                                         res.json(data)}))
                                    .catch(e => res.status(400).end()))
             .catch(e => res.status(400).end());                                    
})

module.exports = router;