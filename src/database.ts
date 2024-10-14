import { Sequelize } from "sequelize-typescript";
import { Tarea } from "./models/tareas";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT as any || 'mysql',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
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