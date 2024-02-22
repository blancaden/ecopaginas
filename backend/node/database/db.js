import { Sequelize } from "sequelize";

const db = new Sequelize("nombre_tabla", "root", "",{
    host:"localhost",
    dialect: "mysql"
})

export default db 
