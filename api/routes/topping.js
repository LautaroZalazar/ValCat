import { Router } from "express";
import { postTopping } from "../controllers/toppings/POST/postTopping.js";

const router = Router();

router.post("/", postTopping)

export default router;
