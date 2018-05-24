const express = require('express');
const router = express.Router();
const StoreModel = require('../models/StoreModel');

router.get('/stores', (req, res) => {
    StoreModel.getAllStores()
              .then(results => res.json(results))
              .catch(e => res.status(400).end());
});

module.exports = router;