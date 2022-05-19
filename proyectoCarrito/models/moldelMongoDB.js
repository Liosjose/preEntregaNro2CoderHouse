const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// ------------------------PRODUCTO ------------------------------------//
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

// --------------------------------------------------------------------//


module.exports = {Productos,ProductSchema};