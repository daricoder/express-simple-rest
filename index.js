const express = require("express");
const app = express();
const port = 9000;
const cors = require("cors");

const routes_svelte_practice = require("./routes/svelte-practice");

app.get("/", (req, res) => {
  res.send(`HELLO WORLD IN SERVER WITH EXPRESS IN POR ${port}`);
});
// Configurar cabeceras y cors
// todo servidor debe tener configurado los headers de respuesta esto en header de respuesta , ya que cors o cross origin resource sharing que es un mecanismo que te dice: que no pueden obtenerse recursos de origenes distintos un origen cliente(que tambien puede ser u mismo servidor que actua como cliente) a : localhosta no puede interactuar con un servidor b localhostb es decir no debe hacerlo no puede obtener recursos entre dominios cruzados , pero si son del mismo dominio no hay el problema del cors. Para eso se debe equipar al servidor con los headers siguientes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    // res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// app.use(cors({
//     origin:"*"
// }))

app.use(express.json())



app.use("/svelte-practice", routes_svelte_practice);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
