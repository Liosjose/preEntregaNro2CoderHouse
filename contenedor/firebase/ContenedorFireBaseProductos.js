const admin = require("firebase-admin");


class CRUDFire {


async save(obj){ 
     const db = admin.firestore();
 console.log(obj)
 try{
     
        
     let id = 0;
     const productos = await this.readAll();
      if (productos.length == 0) {id = 0;
     } else {
       id= Number(productos.length +1)
     }

     const docRef = db.collection('Productos').doc(`${id}`);
     await docRef.set(obj);
    
  this.readAll();
}catch(error){ 
     console.log(error)
} 
}

async getByid(id){ 
  console.log("entra")


  try {
    const db = admin.firestore();
    const query = await db.collection('Productos')
    const doc = await query.doc(`${id}`)
    
    const item = await doc.get()
    console.log(item.data())
    return item.data()
} catch (err) {
    console.log(err)
    throw new Error('Error pidiendo los datos')
}
}

async readAll(id){ 

  if(id){ 
    this.getByid(id);
  }else {
  const db = admin.firestore();
  try{
  const snapshot = await db.collection('Productos').get();
  let docs = snapshot.docs;
 return docs.map((doc) => (doc.data()));

  ;
}catch(error){ 
  console.log(error)
} 
}
}


 async deleteById(id){ 
   console.log(`de prueba nos mas ${id}`)
 }


  async  delete() {
    const db = admin.firestore();
    try{
    const query = db.collection('Productos')
    const snapshot = await query.get()
    const batchSize = snapshot.size

    console.log(batchSize)
     
   async function deleteCollection(batchSize)  {
     
    const orderCollections = query.orderBy('id').limit(batchSize)
    console.log(orderCollections)
    return new Promise((resolve, reject) => {
        deleteQueryBatch(resolve).catch(reject)
    })
}
    const deleteQueryBatch = async (resolve) => {
    if (batchSize === 0) {
        resolve()
        return
    }

    const batch = admin.firestore().batch()
    snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref)
    })
    await batch.commit()

    process.nextTick(() => {
        deleteQueryBatch(resolve)
    })
}

deleteCollection(batchSize)



  }catch(error){ 
    return error
  }

}


}
module.exports= {CRUDFire}



