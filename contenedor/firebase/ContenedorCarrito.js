const admin = require("firebase-admin");

class carritoFire {

async createCarrito() {
const db = admin.firestore();

try{

     let newID = 0;
	let id =newID;
     const docRef = db.collection('carrito').doc(`${id}`);

await docRef.set({
     
  id: newID,
  timestamp: new Date().toISOString(),
  productos: []

});
return ('Carro creado con exito');
}catch(error){ 
     console.log(error)
}}


async  getAllCart(){
     
     try {
          const db = admin.firestore()
          
          const querySnapshot = await db.collection('carrito').get()
         
          let docs = querySnapshot.docs;
          
          let map = docs.map((doc) => (doc.data()));
          
          return map 
     } catch (err) {
          return err;
     }
}



async addProduct (cartId, newElement){
     const db = admin.firestore();
     try {
          const cart = db.collection('carrito').doc(`${cartId}`);
          const cartInfo = await cart.get();
          
          if (cartInfo.data().productos.length == 0) {
               newElement.id = Number(0);
          } else {
               newElement.id = cartInfo.data().productos.length ;
               
          }
         
          newElement.timestamp = new Date().toISOString();
          const productsInCart = cartInfo.data().productos;
          productsInCart.push(newElement);
          await cart.update({ productos: productsInCart });
          return('Agregado con exito')
     } 
     
     
     catch (error) {
          return (error)
     }
}

async getById(id){ 
     {
          try {
              const cart = await this.collection.findOne({ id: id });
              const products = cart?.productos;
              if (products) {
                  return products;
              } else {
                  throw new Error('No existe el carrito');
              }
          } catch {
              throw new Error('Error pidiendo los datos');
          }
      }

}

async deleteProduct(id, prodId){
     try {
         const carts = await this.getAllCart()
         const cartIndex = carts.findIndex((e) => e.id == id)

         if (cartIndex >= 0) {
             const productsOnCart = carts[cartIndex].productos
             const prodToDeleteIndex = productsOnCart.findIndex((e) => e.id == prodId)
             if (prodToDeleteIndex >= 0) {
                 productsOnCart.splice(prodToDeleteIndex, 1)
                 await this.collection.updateOne(
                     { id: id },
                     {
                         $set: { productos: productsOnCart },
                     }
                 )
                 return true
             } else {
                 return false
             }
         } else {
             return false
         }
     } catch(error){
         return console.log(`Error borrando el producto ${error}`)
     }
 }

}
 module.exports = {carritoFire}