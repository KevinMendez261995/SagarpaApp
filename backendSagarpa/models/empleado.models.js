/*
//la palabra const define la variable para que solo pueda tener ese valor y no se cambie
const mongoose = require('mongoose');

let empleadoSchema = new mongoose.Schema({
    //grua:{type:String ,required:true,unique:true},
    usuario:{type:String,required:true,unique:true},
    contrasena:{type:String,required:true}
});


//estp lo mecesta mongoose,le pasamos 3parametros: nombre de la coleccion con la primer aen mayuscula
//nombre del esquema y la coleccion  con su nombre normal.
const empleadoModel=mongoose.model('Empleado',empleadoSchema,'empleado');
//este es para exportar la variable gruas model que contienne toda la estructura.
module.exports = empleadoModel;
*/

//La palabra const define la variable para que solo pueda tener ese valor y no se cambie
const mongoose = require('mongoose');

let productoSchema = new mongoose.Schema({
    nomProducto:{type:String,required:true},
    fechaReg:{type:Date,default:Date.now},
    estatus:{type:Boolean,default:true},
    cantidad:{type:Number},
    unidadMed:{type:String,defualt:""},
    productor:{type:mongoose.Schema.ObjectId,ref:"Usuarios"}

});

/*
	Esto lo necesita mongoose,le pasamos 3 parametros: 
		1.- Nombre de la colección con la primera en mayúscula
		2.- Nombre del esquema
		3.- La colección con su nombre normal.
*/
const modeloProducto = mongoose.model('Productos',productoSchema,'productos');

/*
	Exportamos nuestra variable que tendrá la estructura del modelo y la 
	colección a donde se realizará la acción que se requiera
 */
module.exports = modeloProducto;