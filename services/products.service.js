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
  // await products.delete({ bookId: id }).go();
  const result = await products.delete({ bookId: id }).go();
  return result;
}

async function getProductById(id) {
  return await products.get({ bookId: id }).go();
}
async function searchProducts(searchTerm) {
  if (!searchTerm) {
    // If no search term is provided, return all products
    return await products.scan.go();
  }

  // Convert search term to lower case for case-insensitive comparison
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  return await products
    .scan({
      FilterExpression: `
      contains(#title, :searchTerm) OR contains(#author, :searchTerm)
    `,
      ExpressionAttributeNames: {
        "#title": "title",
        "#author": "author",
      },
      ExpressionAttributeValues: {
        ":searchTerm": lowerCaseSearchTerm,
      },
    })
    .go();
}

export {
  getAllProducts,
  addingProduct,
  deleteProductById,
  updateProductById,
  getProductById,
  searchProducts,
};
