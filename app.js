const express = require("express")
const app = express();
const path = require('path');
const port = 3000;

app.set("views", path.resolve(__dirname,"views"))
app.set("view engine", "ejs")

app.use(express.static(path.resolve(__dirname, "public")))

/* Importacion de rutas */
let homeRouter = require("./routers/home")

/* Rutas */
app.use("/", homeRouter)
app.use("/about", homeRouter)


app.listen(port, () => { console.log(`Servidor funcionando en http://localhost:${port}`) })