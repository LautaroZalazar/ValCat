import { Router } from "express";
import { getAllFillings } from "../controllers/filling/GET/getAllFilling.js";
import { postFilling } from "../controllers/filling/POST/postFilling.js";
import { updateFilling } from "../controllers/filling/PUT/updateFilling.js";
import { deleteFillingById } from "../controllers/filling/DELETE/deleteFillingById.js";
import { getFillingById } from "../controllers/filling/GET/GetFillingById.js";

const router = Router();

router.get("/", getAllFillings)

router.post("/", postFilling)

router.put("/:id", updateFilling)

router.delete("/:id", deleteFillingById)

router.get("/:id", getFillingById)

export default router;
