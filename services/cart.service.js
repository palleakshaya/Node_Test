import { cart } from "../entities/cart.entity.js";

// async function addingUsers(addingUser) {
//   await Users.create(addingUser).go();
// }

// async function getUsersByUsername(username) {
//   return await Users.get({ username }).go();
// }

async function getAllProductsFromCart() {
  return await cart.scan.go();
}

async function addingProductInCart(addProduct) {
  return await cart.create(addProduct).go();
}

async function deleteProductFromCart(userId) {
  await cart.delete({ userId }).go();
}

async function getProductByIdFromCart(userId) {
  return await cart.get({ userId }).go();
}
async function updateProductByIdInCart(userId, updateData) {
  return await cart
    .put({
      userId,
      ...updateData,
    })
    .go();
}

export {
  getAllProductsFromCart,
  addingProductInCart,
  deleteProductFromCart,
  getProductByIdFromCart,
  updateProductByIdInCart,
};
