"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tareas_1 = require("../models/tareas");
const router = (0, express_1.Router)();
// crear una tarea
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, completed } = req.body;
        const nuevaTarea = yield tareas_1.Tarea.create({ title, description, completed });
        return res.status(201).json(nuevaTarea);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" });
    }
}));
// obtener todas las tareas 
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tareas = yield tareas_1.Tarea.findAll();
        res.json(tareas);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}));
// obtener una tarea por id
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarea = yield tareas_1.Tarea.findByPk(req.params.id);
        if (tarea) {
            res.json(tarea);
        }
        else {
            res.status(404).json({ message: "Tarea no encontrada" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}));
// actualizar una tarea
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarea = yield tareas_1.Tarea.findByPk(req.params.id);
        if (tarea) {
            tarea.title = req.body.title || tarea.title;
            tarea.description = req.body.description || tarea.description;
            tarea.completed = req.body.completed || tarea.completed;
            yield tarea.save();
            res.json(tarea);
        }
        else {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}));
// eliminar una tarea
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarea = yield tareas_1.Tarea.findByPk(req.params.id);
        if (tarea) {
            yield tarea.destroy();
            res.json({ message: "Tarea eliminada" });
        }
        else {
            res.status(404).json({ message: "Tarea no encontrada" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}));
exports.default = router;
