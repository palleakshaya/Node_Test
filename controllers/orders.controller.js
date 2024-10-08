import {
  createOrder,
  getOrdersById,
  getAllOrders,
} from "../services/orders.service.js";
import { v4 as uuidv4 } from "uuid";
import { getProductByIdFromCart } from "../services/cart.service.js";

export async function placeOrdersC(req, res) {
  const data = req.body;
  // if (!data.products || !data.totalPrice) {
  //   return res.status(400).send({ msg: "Invalid order data" });
  // }
  // const userId = data.userId;
  // try {
  //   const cartData = await getProductByIdFromCart(userId);

  //   if (
  //     !cartData?.data
  //     // !cartData.data.products ||
  //     // cartData.data.products.length === 0
  //   ) {
  //     console.log(cartData);
  //     return res.status(400).send({ msg: "Cart is empty or invalid" });
  //   }

  const orderData = {
    orderId: uuidv4(),
    userId: uuidv4(),
    products: data.products,
    totalPrice: data.totalPrice,
    orderDate: new Date().toISOString(),
    status: "Success",
  };
  try {
    const newOrder = await createOrder(orderData);
    res
      .status(201)
      .send({ msg: "Order Created Successfully", newOrder: newOrder.data });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).send({ msg: "Error placing order" });
  }
}

export async function getOrdersByIdC(req, res) {
  const userId = req.params.id;
  try {
    const orders = await getOrdersById(userId);
    res.send(orders.data);
    console.log(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send({ msg: "Error fetching orders" });
  }
}

export async function getAllOrdersC(req, res) {
  try {
    const orders = await getAllOrders();
    res.send(orders.data);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send({ msg: "Error fetching orders" });
  }
}
