import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.route.js";
import cartRouter from "./routes/cart.route.js";
import orderRouter from "./routes/orders.route.js";
import userRouter from "./routes/users.route.js";
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
app.use("/orders", orderRouter);
app.use("/users", userRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
