//esta version de mysql es mas estable, importa una interfaz para interactuar con base de datos
import mysql from 'mysql2'   

//importamos la libreria de dotenv, con esto podemos usar los datos del servidor mysql en el pool, para saber mas, chequea el archivo .env
import dotenv from 'dotenv'
dotenv.config()

//creacion de objeto pool de conecciones, este metodo es de mysql2, Un pool de conexiones es una forma eficiente de manejar múltiples conexiones a la base de datos y optimizar su reutilización
const pool = mysql.createPool({
    host:     process.env.MYSQL_HOST,           //esto es mejor que localhost
    user:     process.env.MYSQL_USER,           //mi usuario en mysql
    password: process.env.MYSQL_PASSWORD,   //mi clave, que esta vacia
    database: process.env.MYSQL_DATABASE    //la base de datos que quiero usar
}).promise();                    // indica que se desea utilizar el soporte de promesas de mysql2, permitiendo el uso de async/await para manejar las consultas de manera más concisa.


//
//
//MECANICA PARA LIBROS
//
//

export async function getLibros() {
    
    const [rows] = await pool.query('SELECT * FROM Libros') 
    return rows
}
//funcion para OBTENER un usuario
export async function getLibro(id) {
    const [rows] = await pool.query('SELECT * FROM Libros WHERE id_libro = ?', [id]) 
    return rows[0]
}
//funcion para ELIMINAR Libros
export async function deleteLibro(id) {
    const [rows] = await pool.query('DELETE FROM Libros WHERE id_libro = ?', [id])
    console.log("Deleted Libro")
    return getLibros() 
}
//funcion para CREAR Libros
export async function createLibro(nombre_libro, image, categoria_libro, descripcion_libro, valor, stock) {
    const [result] = await pool.query('INSERT INTO Libros (nombre_libro, image, categoria_libro, descripcion_libro, valor, stock) VALUES (?, ?, ?, ?, ?, ?)', [nombre_libro, image, categoria_libro, descripcion_libro, valor, stock])
    const id = result.insertId
    console.log("Added Libro")
    return getLibros(id)
}
//funcion para actualizar usuarios
export async function modifyLibro(nombre_libro, image, categoria_libro, descripcion_libro, valor, stock, id) {
    const [result] = await pool.query(`UPDATE Libros SET nombre_libro = ?, image = ?, categoria_libro = ?, descripcion_libro = ?, valor = ?, stock = ? WHERE id_libro = ?`, [nombre_libro, image, categoria_libro, descripcion_libro, valor, stock, id]);
    id = result.insertId
    console.log("mODIFIED Libros")
    return getLibros(id)
}

