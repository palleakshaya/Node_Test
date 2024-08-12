import { products } from "../entities/products.entity.js";

// async function addingUsers(addingUser) {
//   await Users.create(addingUser).go();
// }

// async function getUsersByUsername(username) {
//   return await Users.get({ username }).go();
// }

async function getAllProductsInCart() {
  return await products.scan.go();
}
async function updateProductByIdInCart(existingData, updateData) {
  return await products
    .put({
      ...existingData.data,
      ...updateData,
    })
    .go();
}

async function addingProductInCart(addProduct) {
  await products.create(addProduct).go();
}

async function deleteProductByIdInCart(id) {
  await products.delete({ productId: id }).go();
}

async function getProductByIdInCart(id) {
  return await products.get({ productId: id }).go();
}

export {
  getAllProductsInCart,
  addingProductInCart,
  deleteProductByIdInCart,
  updateProductByIdInCart,
  getProductByIdInCart,
};
