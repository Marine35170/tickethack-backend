var express = require('express');
var router = express.Router();
const Trips = require('../models/trips');

/* GET users listing. */
router.delete('/users', function(req, res) {
  Trips.findOneAndDelete({ departure: req.params.id })
    })
  



module.exports = router;
