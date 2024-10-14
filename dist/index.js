"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//conexion con la base de datos 
(0, database_1.dbConnection)();
//rutas
app.use('/api', routes_1.default);
app.listen(3000, () => {
    console.log('Server on port 3000');
});
