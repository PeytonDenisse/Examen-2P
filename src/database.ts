import { Sequelize } from "sequelize-typescript";
import { Tarea } from "./models/tareas";

export const sequelize = new Sequelize({
    database: "tareas",
    dialect: "mysql",
    username: "root", //vamos a agregar las variables de entorno que mas adelante agregaremos 
    password: "root",
    models: [Tarea]
});