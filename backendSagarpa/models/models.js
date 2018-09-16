
const mongoose = require('mongoose');
const _config = require('../_config');
const _ = require('underscore');

module.exports = (wagner) => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:' + _config.dbport + '/' + _config.dbname, {
        useMongoClient: true
    });
    mongoose.set('debug', true);    //watch all queries to mongo

    wagner.factory('db', () => mongoose);
    
    //lo que va dentro de require es la variable que exportas de  "collection".model.js
    const Empleado = require('./empleado.models');
    const Usuarios = require('./usuarios.models');

    const models = {
        //Role, declaras las const de arriba        
        Empleado,
        Usuarios
    };

    _.each(models, (v, k) => {
        wagner.factory(k, () => v);
    });
};