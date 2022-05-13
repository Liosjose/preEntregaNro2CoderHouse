const mongoose = require('mongoose');
let {Producto} = require('../contenedor/ContenedorMongo.js')
let creProducto = new Producto()

async function connect(){ 
     try{
     const url = "mongodb+srv://PruebaCoder:12345@cluster0.fpo8l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
     let rta = await mongoose.connect(url)
     console.log('Conectado a base de datos')
 }catch(error){ 
     console.log(`Ha Ocurrido un Error en la conexion ${error} `)
 }
 }

//-----------------PRUEBAS----------/
//creProducto.insertarProducto('f','f',45344,'f',3,4)
//insertarProducto('f','f',453,'f',3,4)
//buscarTodo()
//buscarCodigo(4)
//findAndDelete()
//Delete()


 module.exports= connect;

