var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('AboutMe');
});

router.get('/contact', function(req, res, next) {
  res.render('ContactMe');
});

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/projects', function(req, res, next) {
  res.render('ProjectsPage');
});

router.get('/services', function(req, res, next) {
  res.render('ServicesPage');
});


module.exports = router;
