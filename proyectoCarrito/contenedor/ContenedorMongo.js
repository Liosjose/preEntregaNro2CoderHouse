let {Productos} = require('../models/moldelMongoDB')

class Producto {
  
 
async  insertarProducto(nombre,descripcion,codigo,foto,precio,stock){ 
  try{ 
    const producto = {nombre, descripcion, codigo, foto, precio, stock}
    const productoSaveModel = new Productos(producto)
    let productoSave = await productoSaveModel.save();
    console.log(`se guardo con exito ${productoSave}`)
  
  }catch(error){ 
    console.log(error)
  }

}

async  buscarTodo(){ 
  try{ 
    let find = await Productos.find({})
    console.log(find)
  
  }catch(error){ 
    console.log(`no se encontro nada${error}`)
  }

}


async  buscarCodigo(codigo){ 
  try{ 
    let find = await Productos.find({codigo: codigo})
    console.log(find)
  
  }catch(error){ 
    console.log(`no se encontro nada${error}`)
  }

}


 async  findAndDelete(codigo){
  try{ 
    let find = await Productos.findOneAndDelete({codigo: codigo})
    console.log(`se ha eliminado ${find.nombre}`)
  
  }catch(error){ 
    console.log(`no se encontro nada${error}`)
  }

}


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
