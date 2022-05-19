 let {carritoFire} = require('../../contenedor/firebase/ContenedorCarrito') 


class DaoFirebaseCart extends carritoFire{
    constructor(){
        super();
    }
}

module.exports= DaoFirebaseCart