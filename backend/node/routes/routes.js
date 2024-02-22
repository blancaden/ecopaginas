import express from "express";
import { createLibro, deleteLibro, getAllLibros, getLibro, updateLibro } from "../controllers/LibroControles.js";
const router = express.Router()

router.get("/", getAllLibros)
router.get("/", getLibro)
router.post("/", createLibro)
router.put("/", updateLibro)
router.delete("/", deleteLibro)

export default router