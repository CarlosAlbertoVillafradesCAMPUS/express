import dotenv from "dotenv"; //asi se traen las variables de entorno
import express from "express"; //traemos express

dotenv.config(); //para utilizar variables de entorno
const appExpress = express(); //empezar a utilizar express

appExpress.get("/campus/:id", (req,res)=>{ //asi se crea una ruta o endpoint con express
    console.log(req.params); //asi traemos los parametros :id
    console.log(req.query.nombre); //asi se traen las querys u objetos que se la pasan en la url importante colocarlos el simbolo ?
    console.log(req);
    res.send("hola mundo") //se utiliza send y no end, el end es solo para node puro
})


const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`)); //asi se levanta un servidor con express
