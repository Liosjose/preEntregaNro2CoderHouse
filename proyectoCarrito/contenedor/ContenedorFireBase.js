const admin = require("firebase-admin");
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


async function CRUD(){ 
     const db = admin.firestore();
    

 try{
     const docRef = db.collection('Productos').doc('Producto');

     await docRef.set({
       nombre: 'papas',
       precio: 'fritas',
       stock: 1815
     });

     await docRef.set({
      nombre: 'queso',
      precio: 222,
      stock: 1815
    });
     
     const snapshot = await db.collection('Productos').get();
     snapshot.forEach((doc) => {
       console.log(doc.id, '=>', doc.data());
     });
}catch(error){ 
     console.log(error)
} 

}
module.exports= {CRUD}