import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.route.js";
import cartRouter from "./routes/cart.route.js";

// const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4500;
app.use(cors());
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/products", productsRouter);
app.use("/cart", cartRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
