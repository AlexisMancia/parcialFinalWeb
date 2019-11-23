var express = require('express');
var router = express.Router();
var pizzaController = require('../controllers/PizzaController');

router.get('/', function (req, res, next) {
    res.render('formulario', {error: {bad: false}})
});

router.post('/',pizzaController.register);

module.exports = router;