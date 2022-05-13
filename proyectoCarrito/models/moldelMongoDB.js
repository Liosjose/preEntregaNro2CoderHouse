const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
 
  nombre: {type: String, required:true},
  descripcion: {type: String, required:true},
  codigo: {type: Number, required:true,unique: true},
  foto: {type: String, required:true},
  precio: {type: Number, required:true},
  stock: {type: Number, required:true},
  timestamps: { type : Date, default: Date.now }
});

const Productos = mongoose.model("Productos", ProductSchema);


// ------------------------CARRITO ------------------------------------//

const carritoSchema = new Schema({
 
  id: {type: String, required:true},
  timestamps: {type : Date, default: Date.now },
  productos: { default: [] }
  
});

const Carrito = mongoose.model("Carrito", carritoSchema);




// Export the Article model
module.exports = {Productos, Carrito};