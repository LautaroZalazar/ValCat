import { Router } from "express";
import { postModel } from "../controllers/model/POST/postModel.js";
import { getAllModels } from "../controllers/model/GET/getAllModels.js";
import { updateModel } from "../controllers/model/PUT/updateModel.js";
import { deleteModelById } from "../controllers/model/DELETE/deleteModelById.js";
import { getModelById } from "../controllers/model/GET/getModelById.js";

const router = Router();

router.get("/", getAllModels)

router.post("/", postModel)

router.put("/:id", updateModel)

router.delete("/:id", deleteModelById)

router.get("/:id", getModelById)

export default router;
