import { Router,request, response } from "express";
import { Tarea } from "../models/tareas";

const router = Router();

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