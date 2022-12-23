import { Router } from "express";
import { getAllCakes } from "../controllers/cake/GET/getAllCakes.js";
import { getCakeById } from "../controllers/cake/GET/getCakeById.js";

const router = Router();

router.get("/", getAllCakes)

router.get("/:id", getCakeById)

export default router;
