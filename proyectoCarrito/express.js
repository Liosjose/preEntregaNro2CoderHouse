const express = require('express');
const router = require ( './routes/index.js')
const app = express();
const  bodyParser = require('body-parser')
const connect =require('./db/mongoDB')
const {connectFire} = require('./db/fireBase')

app.use(express.json())
app.use(express.urlencoded({extended: true }));
app.use(bodyParser.urlencoded({extended: false }));
app.use('/api',router);

//conexion a Mongo
connect();
//conexion FireBase
connectFire()
 
const PORT = 8080;
const server = app.listen(PORT, ()=>{ 
    console.log(`estamos en el puerto ${server.address().port}`);
})

server.on('error', error=>{  
    console.log(`este es el problema ${error}`);
})