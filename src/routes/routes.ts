import { Router,request, response } from "express";
import { Tarea } from "../models/tareas";

const router = Router();

// crear una tarea
router.post("/", async (req: Request, res: Response) => {
    try {
        const{tittle, description, completed }=req.body;
        const nuevaTarea = await Tarea.create({tittle, description, completed});
        return res.status(201).jason(nuevaTarea);
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

