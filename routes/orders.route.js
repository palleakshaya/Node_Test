import express from "express";
// // import cors from "cors";
// import { orders } from "../entities/orders.entity.js";
import {
  getOrdersByIdC,
  placeOrdersC,
} from "../controllers/orders.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/:id", auth, getOrdersByIdC);
router.post("/", auth, placeOrdersC);

// router.get("/:id", getProductByIdFromCartC);

export default router;
