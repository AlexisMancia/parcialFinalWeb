var express = require('express');
var router = express.Router();
var pizzaController = require('../controllers/PizzaController');

router.get('/', function (req, res, next) {
    res.render('actualizar', {error: {bad: false}})
});

router.put('/:nombre_pizza',pizzaController.update);

module.exports = router;