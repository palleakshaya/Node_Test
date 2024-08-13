import express from "express";
// // import cors from "cors";
// import { orders } from "../entities/orders.entity.js";
import {
  getOrdersByIdC,
  placeOrdersC,
} from "../controllers/orders.controller.js";

const router = express.Router();

router.get("/:id", getOrdersByIdC);
router.post("/", placeOrdersC);
// router.get("/:id", getProductByIdFromCartC);

export default router;
