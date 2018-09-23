const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const wagner = require('wagner-core');
const path = require('path');
const expressJWT = require('express-jwt');
var config = require('./_config');

//url para acceder al backend en web
const URL = '/sagarpa'; 

// MODELS
require('./models/models')(wagner);

//Son las llamadas al router para poder realizar las peticiones al servidor.
//const empleado = require('./router/empleado.router')(wagner);
const productos = require('./router/productos.router')(wagner);
const usuarios = require('./router/usuarios.router')(wagner);
//const login = require('./router/login.router')(wagner);
/**aqui se van agregando todos los modelos con la direccion de su archivo router*/


let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/docs', express.static(path.join(__dirname, 'assets')));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, responseType');
  next();
});

/* token*/
/*
var options=[ "/gruas/v1/login/empleado"];

app.use(expressJWT({secret:config.secret}).unless({path: options}),
function(req, res, next){
  // Do stuff here if we have a logged in user, such as:
  //if (!req.user.admin) return res.sendStatus(401);
   //res.sendStatus(200);
  next();
},
function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') { 
    return(res.status(401).send('Invalid authorization token'));
  }
}
);*/

// ROUTERS
//const v = 'v1'; /${v}/
const uri = `${URL}/`;

console.log(uri);


// example: app.use(uri+'mobile', mobile); declaracion de rutas de colecciones.
//app.use(uri + 'empleado', empleado);
//app.use(uri + 'login', login);
app.use(uri + 'usuarios', usuarios);
app.use(uri + 'productos', productos);
/*app.use(uri + 'solicitud', solicitud);
app.use(uri + 'ayudaTerceros', ayudaTerceros);
app.use(uri + 'code', code);*/



module.exports = app;

