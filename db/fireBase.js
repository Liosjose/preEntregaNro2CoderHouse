const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');
const {CRUDFire}= require ('../contenedor/firebase/ContenedorFireBaseProductos')
const CRUD = new CRUDFire;
const {carritoFire} = require('../contenedor/firebase/ContenedorCarrito')
const CRUDcarritoFire = new carritoFire()

const admin = require("firebase-admin");

async function connectFire() {
     try{

          const serviceAccount = require('../coderhousefirebase-firebase-adminsdk-8ooem-7f3e027cd7.json');

          initializeApp({
            credential: cert(serviceAccount)
          });
          
          const db = getFirestore();
         console.log('Conectado a Fire Base')
          
     
          

}catch(error){
     console.log(`algo paso ${error}`)
     
}

}



module.exports = {connectFire}