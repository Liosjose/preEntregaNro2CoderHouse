const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const {CRUD}= require ('../contenedor/ContenedorFireBase')

const admin = require("firebase-admin");

async function connectFire() {
     try{

          const serviceAccount = require('../coderhousefirebase-firebase-adminsdk-8ooem-7f3e027cd7.json');

          initializeApp({
            credential: cert(serviceAccount)
          });
          
          const db = getFirestore();
          
          console.log('Conectado a Fire Base')
          CRUD()


}catch(error){
     console.log(`algo paso ${error}`)
     
}

}



module.exports = {connectFire}