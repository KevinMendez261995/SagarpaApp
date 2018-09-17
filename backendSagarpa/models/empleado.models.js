//la palabra const define la variable para que solo pueda tener ese valor y no se cambie
const mongoose = require('mongoose');

let empleadoSchema = new mongoose.Schema({
    //grua:{type:String ,required:true,unique:true},
    usuario:{type:String,required:true,unique:true},
    contrasena:{type:String,required:true},    
    /*nombre:{type:String,required:true},
    apellido:{type:String,required:true},
    rol:{type:String,required:true},
    activo:{type:Boolean,default:true}*/
});


//estp lo mecesta mongoose,le pasamos 3parametros: nombre de la coleccion con la primer aen mayuscula
//nombre del esquema y la coleccion  con su nombre normal.
const empleadoModel=mongoose.model('Empleado',empleadoSchema,'empleado');
//este es para exportar la variable gruas model que contienne toda la estructura.
module.exports = empleadoModel;