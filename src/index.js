"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var database_1 = require("./database");
var routes_1 = require("./routes/routes");
var app = (0, express_1.default)();
app.use(express_1.default.json);
//conexion con la base de datos 
(0, database_1.dbConnection)();
//rutas
app.use('/api', routes_1.default);
app.listen(3000, function () {
    console.log('Server on port 3000');
});
