
import express from "express";
import cors  from "cors";

import db from "./database/db.js";
import LibroRouters from "./routes/routes.js";

const app = express()

app.use(cors()) 
app.use(express.json())
app.use("/libros", LibroRouters)
try {
    await db.authenticate()
    console.log("Conexión exitoda a la DB")
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}
 
app.get("/", (req, res) =>{
    res.send("Hola mundo")
})

app.listen(8000, ()=>{
    console.log("Server Up running in http:/localhost:8000/")
})