//La palabra const define la variable para que solo pueda tener ese valor y no se cambie
const mongoose = require('mongoose');

let productoSchema = new mongoose.Schema({
    nomProducto:{type:String,required:true},
    //fechaReg:{type:Date,default:new Date(Date.now).toISOString()},
    estatus:{type:Boolean,default:true},
    cantidad:{type:Number,default:0},
    unidadMed:{type:String,defualt:""},
    //productor:{type:Schema.ObjectId,ref:"Usuarios"}

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