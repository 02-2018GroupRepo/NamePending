const express = require('express');
const router = express.Router();
const StoreModel = require('../models/StoreModel');
const WorkshopsModel = require('../models/WorkshopsModel');

router.get('/stores', (req, res) => {
    StoreModel.getAllStores()
              .then(results => res.json(results))
              .catch(e => res.status(400).end());
})
.get('/workshops', (req, res) => {
    WorkshopsModel.getAllWorkshops()
                  .then(results => res.json(results))
                  .catch(e => res.status(400).end());
});

module.exports = router;