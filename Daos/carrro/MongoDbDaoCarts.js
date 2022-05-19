const mongoose = require( "mongoose");
const {CartMongoController} = require ("../../contenedor/mongoDb/ContenedorCarrito")

const schema = new mongoose.Schema({
    id: { type: Number, required: true },
	timestamp: { type: Number},
	productos: { type: Array },
});


 class MongoDbDaoCarts extends CartMongoController {
    constructor() {
        super('carts', schema);
    }
}

module.exports = MongoDbDaoCarts

