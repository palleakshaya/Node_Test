import express from "express";
// import cors from "cors";
import { products } from "../entities/products.entity.js";
import {
  getAllProductsC,
  addingProductC,
  deleteProductByIdC,
  updateProductByIdC,
  getProductByIdC,
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/", getAllProductsC);
router.get("/:id", getProductByIdC);
router.put("/:id", updateProductByIdC);
router.post("/", addingProductC);
router.delete("/:id", deleteProductByIdC);

export default router;
