var express = require('express');
var router = express.Router();
const User = require('../models/users');
const Trips = require('../models/trips');

/* GET users listing. */

router.post('/', function (req, res) {
  const newUser = new User({
    nom: req.body.nom,
    prenom: req.body.prenom,
    mail: req.body.mail,
    password: req.body.password,
  })
  newUser.save();
  User.find().then(data => {
    res.json({ data });
  })
});

router.get('/:id', function (req, res) {
  let id = (req.params.id);
  console.log(id);
  User.findById(id).populate('cart').populate('booking').then(data => {
    res.json({ data })
  });
});


/*router.put('/:id/:trips', function (req, res) {
  User.findById(req.params.id).then(data => {
    data.cart.push(req.params.trips)
    console.log(data)
    res.json(data.populate('carts'))
  })
})*/

router.put('/cart/:id/:trips', function (req, res) {
  User.updateOne({ _id: req.params.id }, { $push: { cart: req.params.trips } }).then(() => {
    User.findById(req.params.id).populate('cart').then(data => {
      console.log(data)
      res.json(data)
    })
  })
})

router.delete('/cart/:id', function (req, res) {
  User.updateOne({ _id: req.params.id }, { cart: [] }).then(() => {
    User.findById(req.params.id).then(data => {
      console.log(data)
      res.json(data)
    })
  })
})

router.delete('/booking/:id', function (req, res) {
  User.updateOne({ _id: req.params.id }, { booking: [] }).then(() => {
    User.findById(req.params.id).then(data => {
      console.log(data)
      res.json(data)
    })
  })
})

router.get('/cart/:id', function (req, res) {
  User.findOne({ _id: req.params.id }).populate('cart').then((data) => {
    console.log(data.cart)
    res.json(data.cart)
  })
})



router.get('/booking/:id', function (req, res) {
  User.findOne({ _id: req.params.id }).populate('booking').then((data) => {
    console.log(data.booking)
    res.json(data.booking)
  })
})

router.put('/booking/:id/:trips', function (req, res) {
  User.updateOne({ _id: req.params.id }, { $push: { booking: req.params.trips } }).then(() => {
    User.findById(req.params.id).populate('booking').then(data => {
      console.log(data)
      res.json(data)
    })
  })
})



module.exports = router;
