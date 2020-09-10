var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Clase1', function(req, res, next) {
  res.render('clase1');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/registro', function(req, res, next) {
  res.render('registro');
});

module.exports = router;
