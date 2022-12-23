import { Router } from "express";
import { getAllCakes } from "../controllers/cake/GET/getAllCakes.js";
import { getCakeById } from "../controllers/cake/GET/getCakeById.js";
import { postCake } from "../controllers/cake/POST/postCake.js";

const router = Router();

router.get("/", getAllCakes)

router.get("/:id", getCakeById)

router.post("/", postCake)

export default router;
