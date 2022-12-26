import { Router } from "express";
import { getAllCakes } from "../controllers/cake/GET/getAllCakes.js";
import { getCakeById } from "../controllers/cake/GET/getCakeById.js";
import { postCake } from "../controllers/cake/POST/postCake.js";
import { updateCake } from "../controllers/cake/PUT/updateCake.js"
import { deleteCakeById } from "../controllers/cake/DELETE/deleteCake.js"

const router = Router();

router.get("/", getAllCakes)

router.get("/:id", getCakeById)

router.post("/", postCake)

router.put("/:id", updateCake)

router.delete("/:id", deleteCakeById)

export default router;
