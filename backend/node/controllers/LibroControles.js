
import LibroModel   from "../models/LibroModel.js";

//** METODOS PARA EL CRUD */

 //** MOSTRAR TODOS LOS REGISTROS */
export const getAllLibros = async (req, res) => {
    try {
        const libros = await LibroModel.findAll() 
        res.json(libros)
    } catch (error) {
        res.json({message: error.message})
    }
}

 //** MOSTRAR UN REGISTRO */
export const getLibro = async(req, res) => {
    try {
        const libro = LibroModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(libro)
    } catch (error) {
        res.json({message: error.message})
    }
}

 //** CREAR UN REGISTRO */
export const createLibro = async (req, res) => {
    try { 
        await  LibroModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente"
        })
    } catch(error) {
        res.json({message: error.message})
    
    }
}

 //** ACTUALIZAR UN REGISTRO */

export const updateLibro = async(req,res)=>{
    try {
        await LibroModel.update(req.body,{
            where: { id: req.param.id}
        })
        res.json({
            "message": "¡Registro actualizado correctamente"
        })
    } catch(error) {
        res.json({message: error.message})
    
    }
}

 //** ELIMINAR UN REGISTRO */

export const deleteLibro = async (req, res) => {
    try {
        LibroModel.destroy({
            where: { id: req.param.id}
        })
        res.json({
            "message": "¡Registro eliminado correctamente"
        })
    } catch(error) {
        res.json({message: error.message})
    
    }

        
}