import express from "express";
// // import cors from "cors";
// import { orders } from "../entities/orders.entity.js";
import {
  getOrdersByIdC,
  placeOrdersC,
  getAllOrdersC,
} from "../controllers/orders.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/:id", getOrdersByIdC);
router.get("/", getAllOrdersC);
router.post("/", placeOrdersC);

// router.get("/:id", getProductByIdFromCartC);

export default router;
