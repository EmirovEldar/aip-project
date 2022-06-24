var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Винни Пуха */
router.get('/blum', function(req, res, next) {
  res.render('hero', {
      title: "Блум",
      picture: "images/blum.png",
      desc: "Такая родная"
  });
});


/* Страница Винни Пуха */
router.get('/stella', function(req, res, next) {
  res.render('hero', {
      title: "Стелла",
      picture: "images/stella.png",
      desc: "Такая секая"
  });
});
/* Страница Винни Пуха */
router.get('/muza', function(req, res, next) {
  res.render('hero', {
      title: "Муза",
      picture: "images/muza.png",
      desc: "Такая ок)"
  });
});
/* Страница Винни Пуха */
router.get('/leyla', function(req, res, next) {
  res.render('hero', {
      title: "Лейла",
      picture: "images/leyla.png",
      desc: "Такая родная"
  });
});
/* Страница Винни Пуха */
router.get('/Tehna', function(req, res, next) {
  res.render('hero', {
      title: "Техна",
      picture: "images/tehna.png",
      desc: "Такая родная"
  });
});


module.exports = router;
