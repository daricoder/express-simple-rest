
var express = require('express');
var router = express.Router();

// define the home page route
router.post('/', function(req, res) {
  console.log(req.body)
  res.send(req.body);
});


module.exports = router;