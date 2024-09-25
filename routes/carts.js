var express = require('express');
const User = require('../models/users');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res) {
  User.findOne({_id: req.params.id}).then(data => {
    res.json({data})
  });
});

module.exports = router;
