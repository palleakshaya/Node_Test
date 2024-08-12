import { products } from "../entities/products.entity.js";

// async function addingUsers(addingUser) {
//   await Users.create(addingUser).go();
// }

// async function getUsersByUsername(username) {
//   return await Users.get({ username }).go();
// }

async function getAllProducts() {
  return await products.scan.go();
}
async function updateProductById(existingData, updateData) {
  return await products
    .put({
      ...existingData.data,
      ...updateData,
    })
    .go();
}

async function addingProduct(addProduct) {
  await products.create(addProduct).go();
}

async function deleteProductById(id) {
  await products.delete({ productId: id }).go();
}

async function getProductById(id) {
  return await products.get({ productId: id }).go();
}

export {
  getAllProducts,
  addingProduct,
  deleteProductById,
  updateProductById,
  getProductById,
};
