//status es para atrapar los errores
const status = require('http-status');
//utils para dar respuesta en rutas diferentes
const handler = require('../utils/handler');
const bcrypt = require('bcryptjs');

//collection I need
let _productos;

const getAllProductos = (req, res) => {
    _productos.find({})
        .exec(handler.handleMany.bind(null, 'productos', res));
};

const create = (req, res) => {
        
    let producto = req.body;
    /*
    let productoID = _productos.find({producto.productor})
        .exec(handler.handleOne.bind(null, 'productos', res));

    producto.productor = productoID._id;
*/
    console.log("producto: ",producto);
    _productos.create(producto)
        .then(productoCreated => res.json({ code: status.OK, producto: productoCreated }))
        .catch(err => res.status(status.BAD_REQUEST).json({
            code: status.BAD_REQUEST,
            message: 'Error in request',
            detail: err.toString()
        }));
};

const update = (req, res) => {
    console.log(req);
    let empleado = req.body;
    let { _id } = req.params;
    console.log(_id);
    _productos.findByIdAndUpdate(_id, empleado, { new: true })
        .exec(handler.handleOne.bind(null, 'productos', res));
};

const remove = (req, res) => {
    let { _id } = req.params;
    _productos.findByIdAndRemove(_id)
        .exec(handler.handleOne.bind(null, 'productos', res));
};

//todos los export dentro del parentesis
module.exports = (Prueba) => {
    _productos = Prueba;
    return ({
        //todas las funciones de empleados.router.js
        getAllProductos,
        create,
        update,
        remove
    });
}