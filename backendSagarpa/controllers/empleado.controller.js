//status es para cachar los errores
const status = require('http-status');
//utils para sar respuesta en rutas diferenets
const handler = require('../utils/handler');
const bcrypt = require('bcryptjs');

//collection I need
let _producto;


const getAll = (req, res) => {
    _producto.find({})
        //le pasa el nombre que quieres que le ponga al areglo del resultado en este caso empleado
        //handleMany es  para varios resultados y handleOne cuando es solo uno.
        .exec(handler.handleMany.bind(null, 'productos', res));
};

//getall {activos:false}
const getAllActive = (req, res) => {
    let query ={activo:true};        
    _producto.find(query)    
    .exec(handler.handleMany.bind(null, 'productos', res));
};

//getall {activos:true}
const getAllInactive = (req, res) => {
    let query ={activo:false};        
    _producto.find(query)    
    .exec(handler.handleMany.bind(null, 'productos', res));
};

const getById = (req, res) => {
    let {_id}=req.params;
    console.log(_id);
    _producto.find({_id})
        .exec(handler.handleOne.bind(null, 'productos', res));        
};


const create = (req, res) => {
        
    let empleado = req.body;
    
    console.log("empleado",empleado);
    //console.log('has2',hash2);
    _producto.create(empleado)
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
    _producto.findByIdAndUpdate(_id, empleado, { new: true })
        .exec(handler.handleOne.bind(null, 'productos', res));
};

const remove = (req, res) => {
    let { _id } = req.params;
    _producto.findByIdAndRemove(_id)
        .exec(handler.handleOne.bind(null, 'productos', res));
};

//todos los export dentro del parentesis
module.exports = (Productos) => {
    _producto = Productos;
    return ({
        //todas las funciones de empleados.router.js
        getAll,
        getById,
        create,
        update,
        remove,
        getAllActive,
        getAllInactive
    });
}