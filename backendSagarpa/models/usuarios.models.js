//La palabra const define la variable para que solo pueda tener ese valor y no se cambie
const mongoose = require('mongoose');

let usuarioSchema = new mongoose.Schema({
    usuario:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},   
});

/*
	Esto lo necesita mongoose,le pasamos 3 parametros: 
		1.- Nombre de la colección con la primera en mayúscula
		2.- Nombre del esquema
		3.- La colección con su nombre normal.
*/
const modeloUsuario = mongoose.model('Usuarios',usuarioSchema,'usuarios');

/*
	Exportamos nuestra variable que tendrá la estructura del modelo y la 
	colección a donde se realizará la acción que se requiera
 */
module.exports = modeloUsuario;