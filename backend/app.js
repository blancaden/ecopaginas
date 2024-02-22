import express from 'express';

import {getLibros, getLibro, createLibro, deleteLibro, modifyLibro} from './database.js';

const app = express();
app.use(express.json())

//
//
//MECANICA PARA USUARIOS
//
//
//aqui le digo que llame a la tabla de users, "get" de todos los items
app.get("/Libros", async (req, res) => {
    const Libros = await getLibros()
    res.send(Libros)
})
//aqui le digo que llame a un solo item "get" de los usuarios
app.get("/Libros/:id", async (req, res) => {
    const id = req.params.id
    const Libro = await getLibro(id)
    res.send(Libro)
})
//crear usuarios al servidor "post"
app.post("/Libros", async (req, res) => {
    const { nombre_libro, image, categoria_libro, descripcion_libro, valor, stock } = req.body
    const Libro = await createLibro(nombre_libro, image, categoria_libro, descripcion_libro, valor, stock)
    res.status(201).send(Libro)
})
//eliminar elemento de la tabla
app.delete("/Libros/:id", async (req, res) => {
    const id = req.params.id
    const Libro = await deleteLibro(id)
    res.send(Libro)
})
//actualizar datos de la tabla
app.patch("/Libros/:id", async (req, res) => {
    const id = req.params.id
    const { nombre_libro, image, categoria_libro, descripcion_libro, valor, stock } = req.body
    const libro = await modifyLibro(nombre_libro, image, categoria_libro, descripcion_libro, valor, stock, id)
    res.send(libro)
})

//mensaje de que sea error
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke !!!');
});
//mensaje de que el servidor esta activo
//en esta parte podria externalizar e numero del puerto como una variable externa en el archivo .env
app.listen(8080, () => {
    console.log('Server is running on port 8080')
})


