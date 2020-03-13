const Noticia = require ('./Noticia');
const express = require ('express');
const bodyParser = require('body-parser');
const appServer = express();
appServer.use(express.json());

appServer.listen (3000, ()=>{
    console.log('SERVER IS RUNNING ON PORT 3000');
   });

  appServer.get ('/ver-noticias',
  (req, res) => {
    noticia = {
        Titulo : "POSIBLE CASO DE COVID-19 EN EL POLI",
        Descripcion1: "Hay un presunto caso de coronavirus en la institucion",
        Anexo: "https://github.com/chechoXR/Back-End-App-Docentes",
        Descripcion2: "Hay un presunto caso de coronavirus en la institucion"
      };
  res.send (noticia);
  }
 );

  appServer.post ('/agregar-noticia',
    function(req, res) {
        if(!req.body.Titulo || !req.body.Descripcion1 || !req.body.Anexo ||  !req.body.Descripcion2){
            respuesta = {
                error:true,
                codigo:400,
                mensaje:"missing parameters"  
            };
        } else {
              noticia = {
                Titulo: req.body.Titulo,
                Descripcion1: req.body.Descripcion1,
                Anexo: req.body.Anexo,
                Descripcion2: req.body.Descripcion2
              };
              respuesta = {
                error:false,
                codigo:201,
                mensaje:"created"  
              };
        }
        res.send(respuesta)
        }
);

