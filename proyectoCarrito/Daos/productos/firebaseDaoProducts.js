const {CRUDFire} = require ('../../contenedor/firebase/ContenedorFireBaseProductos');


class DaoFirebaseProduct extends CRUDFire{
    constructor(){
        super();
    }
}




module.exports = DaoFirebaseProduct;