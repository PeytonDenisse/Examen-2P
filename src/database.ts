import { Sequelize } from "sequelize-typescript";
import { Tarea } from "./models/tareas";

export const sequelize = new Sequelize({
    database: "tareas",
    dialect: "mysql",
    username: "root", //vamos a agregar las variables de entorno que mas adelante agregaremos 
    password: "root",
    models: [Tarea]
});

export const dbConnection = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({force: true});
        console.log('Database synchronized');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}