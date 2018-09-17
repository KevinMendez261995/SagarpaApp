//status es para atrapar los errores
const status = require('http-status');
//utils para dar respuesta en rutas diferentes
const handler = require('../utils/handler');
const bcrypt = require('bcryptjs');

//collection I need
let _usuarios;


const getAllUsuarios = (req, res) => {
    _usuarios.find({})
        .exec(handler.handleMany.bind(null, 'usuarios', res));
};

const getAllAgropecuarios = (req, res) => {
    let query ={agropecuario:true};        
    _usuarios.find(query)
    .exec(handler.handleMany.bind(null, 'usuarios', res));
};

const getAllGanaderos = (req, res) => {
    let query ={ganadero:true};        
    _usuarios.find(query)
    .exec(handler.handleMany.bind(null, 'usuarios', res));
};

const getAllAgricultores = (req, res) => {
    let query ={agricultor:true};        
    _usuarios.find(query)
    .exec(handler.handleMany.bind(null, 'usuarios', res));
};

const getById = (req, res) => {
    let {_id}=req.params;
    console.log(_id);
    _usuarios.find({_id})
        .exec(handler.handleOne.bind(null, 'usuarios', res));        
};


const create = (req, res) => {
        
    let usuario = req.body;
    let hash = bcrypt.hashSync(usuario.password, bcrypt.genSaltSync(9));
    usuario.contrasena = hash;
    console.log("usuario: ",usuario);
    _usuarios.create(usuario)
        .then(usuarioCreated => res.json({ code: status.OK, usuario: usuarioCreated }))
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
    _usuarios.findByIdAndUpdate(_id, empleado, { new: true })
        .exec(handler.handleOne.bind(null, 'usuarios', res));
};

const remove = (req, res) => {
    let { _id } = req.params;
    _usuarios.findByIdAndRemove(_id)
        .exec(handler.handleOne.bind(null, 'usuarios', res));
};

//todos los export dentro del parentesis
module.exports = (Usuarios) => {
    _usuarios = Usuarios;
    return ({
        //todas las funciones de empleados.router.js
        getAllUsuarios,
        getById,
        create,
        update,
        remove,
        getAllAgropecuarios,
        getAllAgricultores,
        getAllGanaderos
    });
}