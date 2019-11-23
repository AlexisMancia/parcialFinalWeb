const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PizzaSchema = Schema({
    nombre_pizza: {
        type: String,
        required: true,
        unique: true
    },
    especialidad: String,
    tipo_masa: String,
    tamanio:String,
    precio: {
        type: Number,
        required: true
    },
    login_count: Number
}, {
    timestamps: true
});

module.exports = mongoose.model("Pizzas", PizzaSchema);