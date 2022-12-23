import { Router } from "express";
import { getAllCakes } from "../controllers/cake/GET/getAllCakes.js";

const router = Router();

router.get("/", getAllCakes)

export default router;
