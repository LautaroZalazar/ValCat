import { Router } from "express";
import { postModel } from "../controllers/model/POST/postModel.js";

const router = Router();

router.post("/", postModel)

export default router;
