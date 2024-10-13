import express, {Request, Response } from 'express';
import { dbConnection } from './database';
import routes from './routes/routes'

const app = express();
app.use(express.json);

//conexion con la base de datos 
dbConnection();

