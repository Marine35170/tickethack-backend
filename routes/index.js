var express = require('express');
var router = express.Router();
const Trips = require('../models/trips');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/trips/:departure/:arrival/:date', function(req, res) {
  let trajetDate = new Date(req.params.date);
  Trips.find({departure: req.params.departure, arrival: req.params.arrival, date: {$gte: trajetDate} }).then(data => {
    res.json({data})
  })
});





module.exports = router;
