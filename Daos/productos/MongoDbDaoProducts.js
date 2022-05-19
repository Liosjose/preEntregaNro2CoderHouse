
const {Producto} = require('../../contenedor/mongoDb/ContenedorMongoProducto')
const {ProductSchema} = require('../../models/moldelMongoDB') 


class MongoDbDaoProducts extends Producto {
    constructor() {
        super('productos', ProductSchema);
        
  }

}


module.exports= MongoDbDaoProducts;