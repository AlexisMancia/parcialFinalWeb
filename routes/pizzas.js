var express = require('express');
var router = express.Router();
var pizzaController = require('../controllers/PizzaController');


router.get('/:nombre_pizza', pizzaController.getOne);
router.get('/', pizzaController.getAll);

router.post('/',pizzaController.register);
router.put('/:nombre_pizza', pizzaController.update);
router.delete('/:nombre_pizza',pizzaController.delete);

module.exports = router;