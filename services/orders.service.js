import { orders } from "../entities/orders.entity.js";

async function createOrder(orderData) {
  return await orders.create(orderData).go();
}

async function getOrdersById(userId) {
  return await orders.get({ userId }).go();
}

async function getAllOrders() {
  return await orders.scan.go();
}

export { createOrder, getOrdersById, getAllOrders };
