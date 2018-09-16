//status es para cachar los errores
const status = require('http-status');
//utils para sar respuesta en rutas diferenets
const handler = require('../utils/handler');
const bcrypt = require('bcryptjs');

//collection I need
let _empleado;


const getAll = (req, res) => {
    _empleado.find({})
        //le pasa el nombre que quieres que le ponga al areglo del resultado en este caso empleado
        //handleMany es  para varios resultados y handleOne cuando es solo uno.
        .exec(handler.handleMany.bind(null, 'empleado', res));
};

//getall {activos:false}
const getAllActive = (req, res) => {
    let query ={activo:true};        
    _empleado.find(query)    
    .exec(handler.handleMany.bind(null, 'empleado', res));
};

//getall {activos:true}
const getAllInactive = (req, res) => {
    let query ={activo:false};        
    _empleado.find(query)    
    .exec(handler.handleMany.bind(null, 'empleado', res));
};

const getById = (req, res) => {
    let {_id}=req.params;
    console.log(_id);
    _empleado.find({_id})
        .exec(handler.handleOne.bind(null, 'empleado', res));        
};


const create = (req, res) => {
    
    let empleado = req.body;
    let hash = bcrypt.hashSync(empleado.contrasena, bcrypt.genSaltSync(9));
    //const hash2 = bcrypt.hashSync (empleado.contrasena, bcrypt.genSaltSync(9));
    empleado.contrasena = hash;
    console.log("empleado",empleado);
    //console.log('has2',hash2);

    _empleado.create(empleado)
        .then(empleadoCreated => res.json({ code: status.OK, empleado: empleadoCreated }))
        .catch(err => res.status(status.BAD_REQUEST).json({
            code: status.BAD_REQUEST,
            message: 'Error in request',
            detail: err.toString()
        }));

    /*
    let empleado = req.body;
    let hash = bcrypt.hashSync(empleado.contrasena, bcrypt.genSaltSync(9));
    //const hash2 = bcrypt.hashSync (empleado.contrasena, bcrypt.genSaltSync(9));
    empleado.contrasena = hash;
    console.log("empleado",empleado);
    //console.log('has2',hash2);
    _empleado.create(empleado)
        .then(empleadoCreated => res.json({ code: status.OK, empleado: empleadoCreated }))
        .catch(err => res.status(status.BAD_REQUEST).json({
            code: status.BAD_REQUEST,
            message: 'Error in request',
            detail: err.toString()
        }));
    */
};

const update = (req, res) => {
    console.log(req);
    let empleado = req.body;
    let { _id } = req.params;
    console.log(_id);
    _empleado.findByIdAndUpdate(_id, empleado, { new: true })
        .exec(handler.handleOne.bind(null, 'empleado', res));
};

const remove = (req, res) => {
    let { _id } = req.params;
    _empleado.findByIdAndRemove(_id)
        .exec(handler.handleOne.bind(null, 'empleado', res));
};

//todos los export dentro del parentesis
module.exports = (Empleado) => {
    _empleado = Empleado;
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