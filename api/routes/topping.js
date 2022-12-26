import { Router } from "express";
import { postTopping } from "../controllers/toppings/POST/postTopping.js";
import { getAllToppings } from "../controllers/toppings/GET/getAllTopping.js";
import { updateTopping } from "../controllers/toppings/PUT/updateTopping.js";
import { deleteToppingById } from "../controllers/toppings/DELETE/deleteToppingById.js";
import { getToppingById } from "../controllers/toppings/GET/getToppingById.js";

const router = Router();

router.get("/", getAllToppings)

router.post("/", postTopping)

router.put("/:id", updateTopping)

router.delete("/:id", deleteToppingById)

router.get("/:id", getToppingById)

export default router;
