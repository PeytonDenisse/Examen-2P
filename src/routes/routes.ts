import { Router, Request, Response } from "express";
import { Tarea } from "../models/tareas";

const router = Router();

// crear una tarea
router.post("/", async (req: Request, res: Response) => {
    try {
        const { title, description, completed } = req.body;
        const nuevaTarea = await Tarea.create({ title, description, completed });
        return res.status(201).json(nuevaTarea);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" });
    }
});

// obtener todas las tareas 
router.get("/", async (req: Request, res: Response) => {
    try {
        const tareas = await Tarea.findAll();
        res.json(tareas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// obtener una tarea por id
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const tarea = await Tarea.findByPk(req.params.id);
        if (tarea) {
            res.json(tarea);
        } else {
            res.status(404).json({ message: "Tarea no encontrada" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// actualizar una tarea
router.put("/:id", async (req: Request, res: Response) => {
    try {
        const tarea = await Tarea.findByPk(req.params.id);
        if (tarea) {
            tarea.title = req.body.title || tarea.title;
            tarea.description = req.body.description || tarea.description;
            tarea.completed = req.body.completed || tarea.completed;
            await tarea.save();
            res.json(tarea);
        } else {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// eliminar una tarea
router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const tarea = await Tarea.findByPk(req.params.id);
        if (tarea) {
            await tarea.destroy();
            res.json({ message: "Tarea eliminada" });
        } else {
            res.status(404).json({ message: "Tarea no encontrada" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
