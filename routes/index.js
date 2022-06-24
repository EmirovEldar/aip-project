var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница blum */
router.get('/blum', function(req, res, next) {
  res.send("<h1>Страница Блум</h1>")
});
/* Страница Винни Пуха */
router.get('/stella', function(req, res, next) {
  res.send("<h1>Страница Блум</h1>")
});
/* Страница Винни Пуха */
router.get('/flora', function(req, res, next) {
  res.send("<h1>Страница Флоры</h1>")
});
/* Страница Винни Пуха */
router.get('/muza', function(req, res, next) {
  res.send("<h1>Страница Музы</h1>")
});
/* Страница Винни Пуха */
router.get('/leyla', function(req, res, next) {
  res.send("<h1>Страница Лейлы</h1>")
});
/* Страница Винни Пуха */
router.get('/tehna', function(req, res, next) {
  res.send("<h1>Страница Техны</h1>")
});


module.exports = router;
