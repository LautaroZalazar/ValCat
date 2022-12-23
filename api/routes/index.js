import { Router } from "express";
import cakeRouter from "./cake.js";
import fillingRouter from "./filling.js";
import modelRouter from "./model.js";

const router = Router();

router.use("/cake", cakeRouter);
router.use("/model", modelRouter);
router.use("/filling", fillingRouter);

export default router;
