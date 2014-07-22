var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('home/index.jade', { title: 'Express' });
});

module.exports = router;
