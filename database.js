import mysql from 'mysql2'   
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host:     process.env.MYSQL_HOST,           
    user:     process.env.MYSQL_USER,           
    password: process.env.MYSQL_PASSWORD,   
    database: process.env.MYSQL_DATABASE    
}).promise();                    

//
//--------------------------------
//MECANICA PARA LA TABLA USUARIOS
//--------------------------------
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
    console.log("Modified Libros")
    return getLibros(id)
}

