var Pizza = require('../models/pizza');
var debug = require('debug')('parcialFinal:user_controller');
//var Pizza = require('../models/pizza');
// Search a one user y database
module.exports.getOne = (req, res, next) => {
    debug("Search Pizza", req.params);
    Pizza.findOne({
        nombre_pizza: req.params.nombre_pizza
        },)
        .then((foundUser) => {
            if (foundUser)
                return res.status(200).json(foundUser);
            else
                return res.status(400).json(null)
        })
        .catch(err => {
            next(err);
        });
}

//COnseguir todos
module.exports.getAll = (req, res, next) => {
    var perPage = Number(req.query.size) || 10,
        page = req.query.page > 0 ? req.query.page : 0;

    var sortProperty = req.query.sortby || "createdAt",
        sort = req.query.sort || "desc";

    debug("Usersdft List",{size:perPage,page, sortby:sortProperty,sort});

    Pizza.find({}, "-_id")
        .limit(perPage)
        .skip(perPage * page)
        .sort({ [sortProperty]: sort})
        .then((pizzas) => {
           return res
           .status(200).json(pizzas)
        }).catch(err => {
            next(err);
        })

}

//Registrar user
module.exports.register = (req, res, next) => {
    
    
    debug("New Pizza", {
        body: req.body
    });
    Pizza.findOne({
        nombre_pizza: req.body.nombre_pizza
        })
        .then((foundPizza) => {
            if (foundPizza) {
                debug("Pizza duplicado");
                throw new Error(`Pizza duplicada ${req.body.nombre_pizza}`);
            } else {
                let newPizza = new Pizza({
                    nombre_pizza: req.body.nombre_pizza,
                    especialidad: req.body.especialidad || "",
                    tipo_masa: req.body.tipo_masa || "",
                    tamanio: req.body.tamanio,
                    precio: req.body.precio
                });
                return newPizza.save(); // Retornamos la promesa para poder concater una sola linea de then
            }
        }).then(pizzas => { // Con el usario almacenado retornamos que ha sido creado con exito
            return res
                .header('Location', '/pizzas/' + pizzas._id)
                .status(201)
                //.render('exito')
                //.render('botones')
                .json({
                    nombre_pizza: pizzas.nombre_pizza
                    
                });
        }).catch(err => {
            next(err);
        });
}

//Update User
module.exports.update = (req, res, next) => {
    console.log("update");
    debug("Update user", {
        nombre_pizza: req.params.nombre_pizza,        
        ...req.body
    });
    
    let update = {
        ...req.body
    };
    console.log("----------------");
    
    console.log(req.body);
    console.log("----------------");
    
    Pizza.findOneAndUpdate({
        nombre_pizza: req.params.nombre_pizza,
        },update)
        .then((updated) => {
            if (updated)
                return res.status(200).json(updated);
            else
                return res.status(400).json(null);
        }).catch(err => {
            next(err);
        });
}

//Delete User
module.exports.delete = (req, res, next) => {
    debug("Delete user", {
        nombre_pizza: req.params.nombre_pizza,
    });

    Pizza.findOneAndDelete({nombre_pizza: req.params.nombre_pizza})
    .then((data) =>{
        if (data) res.status(200).json(data);
        else res.status(404).send();
    }).catch( err => {
        next(err);
    })
}