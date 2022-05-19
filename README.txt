-----------------------------------------------SOLO PARA SER USADO CON POSTMAN---------------------------------------------

En un futuro se realizara el frontEnd...
Contiene un archivo de persistencia local en una carpeta llamada SaveData con dos archivos ara PRODUCTOS y CARRITO





Funciones Productos:

1) Obtener todos los productos          ------------->GET    localhost:8080/api/productos/               [FUNCIONA]

2)  Obtener por id algun producto       ------------->GET    localhost:8080/api/productos/:id            [FUNCIONA]

3)Introducir item en Productos          ------------->POST   localhost:8080/api/productos/               [FUNCIONA]

4)Eliminar item por ID                  ------------->DELETE localhost:8080/api/productos/:id            [FUNCIONA]



---------------------/------------------------Funciones para CARRITO-------------------------/--------------------------------------

1) Crear un nuevo Carrito(tenemos que pasar un id)* --------------->GET  localhost:8080/api/carrito/:id              [FUNCIONA]

2) Agrega un producto a un carrito                  --------------->POST localhost:8080/api/carrito/50/19            [FUNCIONA]
(Debemos pasar ID_producto y ID_carrito)   

3) Buscar un Carrito y sus producto por ID          -------------->GET localhost:8080/api/carrito/ID_carrito         [FUNCIONA]

4) Eliminar algun producto del carrito              -------------->DELETE localhost:8080/api//carrito/ID/producto/ID [FUNCIONA]


5)Eliminar algun producto de un carrito            -------------->DELETE localhost:8080/api//carrito/33               [FUNCIONA]

----------------------                                   NOTAS                           -------------------------


Para futuras entregas viene con frontEnd;.

MUCHAS GRACIAS .



