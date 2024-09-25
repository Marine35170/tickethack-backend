var express = require('express');
var router = express.Router();
const User = require('../models/users');

/* GET users listing. */

router.post('/', function(req, res){
  const newUser = new User({ 
    nom: req.body.nom,
    prenom: req.body.prenom,
    mail: req.body.mail,
    password: req.body.password,
  })
  newUser.save();
  User.find().then(data => {
    res.json({data});
  })
});

router.get('/users', function(req, res) {
  let id = (req.params.id);
  console.log(id);
  User.findById('66f28cfc1d7d9baab4f022cf').then(data => {
    res.json({data})
  });
});

module.exports = router;
