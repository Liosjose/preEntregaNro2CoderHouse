let { Router } = require ('express');

const router = Router();

const {productsDao, cartDao} = require ( '../daos/index.js')

const productos = productsDao;
const carrito = cartDao;


router.get('/productos/:id?', (req, res)=> { 
     
     (async () => {
     const meta = await productos.readAll(req.params.id);
     
     return res.send(meta); // 
 })();

})


router.post('/productos', (req, res)=> { 
     let obj = req.body
     let id= req.body.id
     console.log(id)
  
 
          const data =  productos.save(obj)
       
      res.send (data) 
})


router.delete('/productos/:id?', (req, res)=> { 
     let id =req.params.id
     
     if(id){
          (async () => {
               const data = await productos.deleteById();
               return res.send(`${data}`); // 
           })();    
     }else {
     
     

     (async () => {
          const data = await productos.delete(id);
          return res.send(`${data}`); // 
      })();
     }

})







// ROUTES DE CARRITO //

router.get('/carrito', (req, res)=> { 
     (async () => {
     const meta = await carrito.getAllCart();
     return res.send(`${meta}`); // 
 })();


})

router.get('/carrito/:id', (req, res)=> { 
     
     (async () => {
     let id= req.params.id
      let meta = await carrito.getById(id);
      
     return res.send(`${meta}`); // 
 })();


})


router.delete('/carrito/:id', (req, res)=> { 
     
     let id = req.params.id;
     (async () => {
          const meta = await carrito.deleteById(id);
          return res.send(`${meta}`); // 
      })();
     

})


router.post('/carrito/:id', (req, res)=> { 
     let id = req.params.id
     let obj={ 
          id : id,
          timeStamp: Date.now(),
          productos: []

     }
     const meta =  carrito.save(obj)
     console.log(meta)
     res.send ('llego')

})

router.post('/carrito/:id_carrito/:id_producto', (req, res)=> {
     let id_carrito= req.params.id_carrito;
     let id_producto= req.params.id_producto;
     try{   
     
         (async  () => {
           let findCarrito = await carrito.getById(id_carrito);
           let findProducto = await productos.getById(id_producto);
           let parseCarrito = JSON.parse(findCarrito);
           let parseProducto = JSON.parse(findProducto)

           
          parseCarrito[0].productos.push(parseProducto[0])

          await carrito.deleteById(id_carrito)
          carrito.save(parseCarrito[0])
           
          return res.send("Si los encuentra"); // 
      })();
     }catch(error){ 
          console.log('error')
          res.end()
     }

})

router.delete('/carrito/:idcarrito/producto/:idproducto', (req, res)=> { 
     
     let id_carrito= req.params.idcarrito;
     let id_producto= req.params.idproducto;

     try{   
     
          (async  () => {
          
            let findCarrito = await carrito.getById(id_carrito);
            
            let parseCarrito = JSON.parse(findCarrito);
            
            let newItems= parseCarrito[0].productos.filter(item=>item.id != id_producto)
            
          
            parseCarrito[0].productos=[];
            
            parseCarrito[0].productos.push(newItems[0])
            console.log(parseCarrito[0])
            
            await carrito.deleteById(id_carrito)
            carrito.save(parseCarrito[0])
          
            
           return res.send("Si los Borra"); // 
       })();
      }catch(error){ 
           console.log('error')
           res.end()
      }
 
 }
 

 


)



module.exports = router;

