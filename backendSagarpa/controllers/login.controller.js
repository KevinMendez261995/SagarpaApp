const status = require('http-status');
const handler = require('../utils/handler');
const jwt = require('jsonwebtoken');
//const bcrypt = require('bcryptjs');
const config = require('../_config');

// collection I need
//let _empleado;

const loginEmpleado = (req, res) => {
    let credential = req.body;
    _empleado.findOne({ 'usuario': credential.usuario,'contrasena':credential.contrasena})//valida que el usuario este activo
        .then(user => {
            if (user) {
                return res.json({
                    userInfo: user,
                    token: jwt.sign({
                        username: user.usuario,
                        password: user.contrasena,
                        _id: user._id
                    },
                        config.secret)
                });
               
            } else {
                return res.status(status.BAD_REQUEST).json({
                    code: status.BAD_REQUEST,
                    message: 'Credenciales no válidas',
                    detail: 'Usuario y/o contraseña incorrectos'
                });
            }
        });
};


module.exports = (Empleado) => {   
    _empleado =Empleado;    
    return ({
        loginEmpleado
    });
}