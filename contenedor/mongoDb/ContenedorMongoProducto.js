let {Productos} = require('../../models/moldelMongoDB')

class Producto {
  
 
async  saveProduct(nombre,descripcion,codigo,foto,precio,stock){ 
  try{ 
    const producto = {nombre, descripcion, codigo, foto, precio, stock}
    const productoSaveModel = new Productos(producto)
    let productoSave = await productoSaveModel.save();
    console.log(`se guardo con exito ${productoSave}`)
  
  }catch(error){ 
    console.log(error)
  }

}

async  readAll(codigo){
  
  if(codigo){
    try{ 
      let find = await Productos.find({codigo: codigo})
      return find
    
    }catch(error){ 
      console.log(`no se encontro nada${error}`)
    }


  }else {
  try{ 
    let find = await Productos.find({})
    return find
  
  }catch(error){ 
    console.log(`no se encontro nada${error}`)
  }

}}



async Delete(){
  try{ 
    let find = await Productos.remove({})
    console.log(`se ha eliminado todo`)
  
  }catch(error){ 
    console.log(`no se encontro nada${error}`)
  }

}
}




module.exports = {Producto}
