var express = require('express');
var router = express.Router();
var algo = require('../config/seatconfig.js');


router.get('/', function(req, res, next) {
  res.send('index.html');
});

router.post('/proc', (req, res, next) => {
  var student = req.body.stu.split('/');
  const row = parseInt(req.body.row);
  const col = parseInt(req.body.col);
  const max = parseInt(req.body.count);
  const digit = parseInt(req.body.digit);
  student = algo(row, col, max,digit, student);
  res.render('result',{student : student, row : row, col : col, max : max});
});


module.exports = router;
