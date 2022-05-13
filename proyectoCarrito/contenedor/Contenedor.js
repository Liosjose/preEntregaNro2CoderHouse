const res = require('express/lib/response');
const fs = require('fs')
class Contenedor{
     constructor(filename){
          this.filename = filename;
     }
async write(texto){ 
     try {
          const escribir = await fs.promises.writeFile(this.filename, texto )
          return escribir;
     } catch (error) {
          console.log(error, "algo Salio Mal en la escritura")
     }
}

async deleteAll(){
     try {
     await fs.promises.writeFile(this.filename,"[]")
          console.log("Contenido Borrado")
     } catch (error) {
          console.log(error)
     }
}

async getAll (){ 
     try {
          const contenido = await fs.promises.readFile(this.filename, 'utf-8')
          const contenidoParse = JSON.parse(contenido)
          let contenidoJSON = JSON.stringify(contenidoParse)
                return  contenidoJSON         
          
              
     } catch (error) {
          console.log(error)
          return error;
     }
}

async getById (id){ 

     try{
const contenido = await fs.promises.readFile(this.filename, 'utf-8')
     const contenidoParse = JSON.parse(contenido)
     
          let filter = contenidoParse.filter(x => x.id == id)
                  
          JSON.stringify(filter).length < 3 ?  error : null ;

         return  JSON.stringify(filter)

    }catch(error){
     console.log('No existe')
     return error;}

}

async deleteById (id){ 

     console.log(`entra con el id ${id}`)
     try{
     const contenido = await fs.promises.readFile(this.filename, 'utf-8')
     const contenidoParse = JSON.parse(contenido)
          let filter = contenidoParse.filter(x => x.id != id)
          
               let nuevo = await this.write(JSON.stringify(filter))
                return nuevo

}catch(error){
     console.log('Hubo algun problema para borrarlo')
     return error;
}



}


async save (obj){ 

     let nuevoObj = obj; 
     let id= obj.id;
     nuevoObj.timeStamp =  parseInt(Date.now())
              
     try{
     const contenido = await fs.promises.readFile(this.filename, 'utf-8')
     const contenidoParse = JSON.parse(contenido)

     // funcion que permite verificar si ya existe ese codigo
     const myMap = contenidoParse.map(item => item.id)
           myMap.indexOf(id) < -1 ?  error: null;
                              
          contenidoParse.push(nuevoObj)
                let nuevo = await this.write(JSON.stringify(contenidoParse))
          console.log(`El iD Asignado fue ${nuevoObj.id}`)
                 
   
}catch(error){
     console.log('No se pudo modificar por que ya existe')
}
}

async updateProductos(id,obj){ 
     let id_producto= id ;
     let key= Object.keys(obj)
     let value = Object.values(obj)
   

     try{
     const contenido = await fs.promises.readFile(this.filename, 'utf-8')
     const contenidoParse = JSON.parse(contenido)

     
     const elementsIndex = contenidoParse.findIndex(element => element.id == id_producto );
     let newArray = [...contenidoParse];
     // aca podria introducir un For e introducir varios elementos de una sola vez    
     newArray[elementsIndex] = {...newArray[elementsIndex],[key[0]]:value[0]}
     
   
     let nuevo = await this.write(JSON.stringify(newArray))
     return console.log(`Editado con exito`)
                 
   
}catch(error){
     console.log('error')
     return error
}
}

async updateCarrito(id,obj){ 
     let id_producto= id ;
     let key= Object.keys(obj)
     let value = Object.values(obj)
   

     try{
     const contenido = await fs.promises.readFile(this.filename, 'utf-8')
     const contenidoParse = JSON.parse(contenido)

     
     const elementsIndex = contenidoParse.findIndex(element => element.id == id_producto );
     let newArray = [...contenidoParse];
     // aca podria introducir un For e introducir varios elementos de una sola vez    
     newArray[elementsIndex] = {...newArray[elementsIndex],[key[0]]:value[0]}
     
   
     let nuevo = await this.write(JSON.stringify(newArray))
     return console.log(`Editado con exito`)
                 
   
}catch(error){
     console.log('error')
     return error
}
}


}




module.exports= Contenedor ;
