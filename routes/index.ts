import express = require('express');
import dbtest = require('../operations/dbtest');
var router = express.Router();


router.get('/', function(req, res, next) {
  dbtest();
  res.render('index');
});

export=router;
