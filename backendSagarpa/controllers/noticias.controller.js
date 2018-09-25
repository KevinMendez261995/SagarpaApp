//status es para atrapar los errores
const status = require('http-status');
//utils para dar respuesta en rutas diferentes
const handler = require('../utils/handler');
const bcrypt = require('bcryptjs');

//collection I need
let _noticias;


const getAllNoticias = (req, res) => {
    _noticias.find({})
        .exec(handler.handleMany.bind(null, 'noticias', res));
};


const getById = (req, res) => {
    let {_id}=req.params;
    console.log(_id);
    _noticias.find({_id})
        .exec(handler.handleOne.bind(null, 'noticias', res));        
};


const create = (req, res) => {
        
    let noticia = req.body;
    _noticias.create(usuario)
        .then(noticiaCreated => res.json({ code: status.OK, noticia: noticiaCreated }))
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
    _noticias.findByIdAndUpdate(_id, empleado, { new: true })
        .exec(handler.handleOne.bind(null, 'noticias', res));
};

const remove = (req, res) => {
    let { _id } = req.params;
    _noticias.findByIdAndRemove(_id)
        .exec(handler.handleOne.bind(null, 'noticias', res));
};

//todos los export dentro del parentesis
module.exports = (Noticias) => {
    _noticias = Noticias;
    return ({
        //todas las funciones de empleados.router.js
        getAllNoticias,
        getById,
        create,
        update,
        remove
    });
}