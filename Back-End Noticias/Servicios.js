const Noticia = require ('./Noticia');
const express = require ('express');
const appServer = express();
appServer.use(express.json());
let users = [];

appServer.listen (3000, ()=>{
    console.log('SERVER IS RUNNING ON PORT 3000');
   });


   appServer.get ('/noticia',
   (req, res) => {
       //Enviar noticia
   res.send ('THIS IS MY BASIC INFORMATION - My Name Is Carlos Ivan!!!');
   }
  );

   appServer.get ('/titulo',
   (req, res) => {
       //Enviar titulo de noticia
   res.send ('THIS IS MY BASIC INFORMATION - My Name Is Carlos Ivan!!!');
   }
  );
  
  appServer.get ('/descripcion1',
   (req, res) => {
       //Enviar descripcion 1 de noticia
   res.send ('THIS IS MY BASIC INFORMATION - My Name Is Carlos Ivan!!!');
   }
  );


  appServer.get ('/anexo',
  (req, res) => {
      //Enviar anexo de noticia
  res.send ('THIS IS MY BASIC INFORMATION - My Name Is Carlos Ivan!!!');
  }
 );



 appServer.get ('/descripcion2',
 (req, res) => {
     //Enviar desc 2 de noticia
 res.send ('THIS IS MY BASIC INFORMATION - My Name Is Carlos Ivan!!!');
 }
);

  appServer.post ('/postNoticia',
 (req, res) => {
 res.send ('THIS IS A POST REQUEST');
 }
);




appServer.post ('/adduser' , (req, res)=>{
    console.log(req.body);
    users.push(req.body);
    res.send ('POST USER ADDED');
   });

  


   
   appServer.get ('/AllUser', (req, res)=>{
    res.json (users);
   });
   
   



appServer.post ('/updateuser/:idUser' , (req, res)=>{
    console.log(req.body);
    console.log ( req.params.idUser);
    res.send ('USER UPDATED');
   });



   appServer.get ('/getUser/:id', (req, res)=>{
    res.json (users[req.params.id]);
   });


   appServer.get ('/removeUser/:id', (req, res)=>{
    res.json (users.splice(req.params.id,1));
   });


   appServer.get ('/getUserByName/:nombre', (req, res)=>{

    for(var i=0; i<users.length;i++)
        if(req.params.nombre.localeCompare(users[i].nombre)==0)
            res.json (users[i]);
    res.json("NOT FOUND")        
   });


   appServer.get ('/getUserByAge/:age', (req, res)=>{
    var arr = [];
    for(var i=0; i<users.length;i++)
        if(parseInt(req.params.age) > (users[i].edad))
            arr.push(users[i]);
    res.json((arr));        
   });