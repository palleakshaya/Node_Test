import express from "express";
// import cors from "cors";
import { products } from "../entities/products.entity.js";
import {
  getAllProductsInCartC,
  addingProductInCartC,
  deleteProductByIdICartC,
  getProductByIdInCartC,
} from "../controllers/products.controller.js";

import { getMovieByIdC } from "./getMovieByIdC.js";

const router = express.Router();

router.get("/", getAllProductsInCartC);
router.get("/:id", getProductByIdInCartC);
router.post("/", addingProductInCartC);
router.delete("/:id", deleteProductByIdICartC);

export default router;
