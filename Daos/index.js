require('dotenv').config()


let productsDao;
let cartDao;



switch (process.env.PERSISTENCIA) {
	
	case 'mongodb':
		console.log('Estamos en mongoDB')
		const  mongoDbDaoCarts  =  require('../Daos/carrro/MongoDbDaoCarts');
		const mongoDbDaoProducts =  require('../Daos/productos/MongoDbDaoProducts');
		
		
		 cartDao =  new mongoDbDaoCarts();
		
		 productsDao = new mongoDbDaoProducts();
		
		

		break
	case 'firebase':
		console.log('Estamos en FireBase')
		const DaoFirebaseCart = require('../Daos/carrro/firebaseDaoCarts');
		const DaoFirebaseProduct  = require('../Daos/productos/firebaseDaoProducts');

		cartDao = new DaoFirebaseCart();
		
	 	productsDao = new DaoFirebaseProduct();
		
		
		break
	default:
		console.log('ah ocurrido un error no ha conseguido ninguno de los casos ')
		break;

		
}


module.exports = { productsDao, cartDao };