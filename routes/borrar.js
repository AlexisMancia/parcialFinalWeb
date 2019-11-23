var express = require('express');
var router = express.Router();
var pizzaController = require('../controllers/PizzaController');

router.get('/', function (req, res, next) {
    res.render('borrar', {error: {bad: false}})
});

router.delete('/:nombre_pizza',pizzaController.delete);

module.exports = router;