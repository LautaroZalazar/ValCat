import { Router } from "express";
import { postFilling } from "../controllers/filling/POST/postFilling.js";

const router = Router();

router.post("/", postFilling)

export default router;
