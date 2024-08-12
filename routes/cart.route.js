import express from "express";
// import cors from "cors";
import { products } from "../entities/products.entity.js";
import {
  getAllProductsFromCartC,
  addingProductInCartC,
  deleteProductFromCartC,
  getProductByIdFromCartC,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/", getAllProductsFromCartC);
router.get("/:id", getProductByIdFromCartC);
router.post("/", addingProductInCartC);
// router.delete("/:id", deleteProductByIdICartC);
router.route("/:id").delete(deleteProductFromCartC);
export default router;
