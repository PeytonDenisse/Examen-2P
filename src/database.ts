import { Sequelize } from "sequelize-typescript";
import { Tarea } from "./models/tareas";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

export const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT as any,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    models: [Tarea]
});

// Resto del código de dbConnection...
