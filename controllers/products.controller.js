import {
  getAllProducts,
  getProductById,
  addingProduct,
  deleteProductById,
  updateProductById,
} from "../services/products.service.js";
import { v4 as uuidv4 } from "uuid";

export async function getAllProductsC(request, response) {
  try {
    const allProducts = await getAllProducts();
    console.log(allProducts);
    response.send(allProducts);
  } catch (error) {
    console.log(error);
    response.status(500).send("Failed to get Products");
  }
}
export async function addingProductC(request, response) {
  const data = request.body;
  console.log(data);
  const addProduct = { ...data, productId: uuidv4() };
  console.log(addProduct);
  try {
    await addingProduct(addProduct);
    console.log(addProduct);
    // movies.push({ id: v4(), ...data });
    response.send(addProduct);
  } catch (error) {
    console.log(error);
    response.status(500).send("Failed to add the product");
  }
}
export async function deleteProductByIdC(request, response) {
  const { id } = request.params;
  // data = movies.find((movie) => movie.id == id);
  try {
    const result = await getProductById();
    if (result.data) {
      // movies = movies.filter((movie) => movie.id != id);
      await deleteProductById(id);
      response.send("Product deleted successfully");
    } else {
      response.status(404).send("Product Not Found");
    }
  } catch (error) {
    console.log(error);
    response.status(500).send("Failed to delete product");
  }
}
export async function updateProductByIdC(request, response) {
  const { id } = request.params;
  const updateData = request.body;
  try {
    const existingData = await getProductById(id);
    if (existingData.data) {
      const result = await updateProductById(existingData, updateData);
      response.send(result.data);
      console.log(id, existingData.data);
    }
  } catch (error) {
    console.log(error);
    response.status(500).send("Failed to update the product");
  }
}
export async function getProductByIdC(request, response) {
  const { id } = request.params;
  console.log(id);
  let res;
  try {
    res = await getProductById(id);
    if (res.data) {
      response.send(res.data);
    } else {
      response.status(404).send("Product Not Found");
    }
  } catch (error) {
    response.status(500).send("Failed to get Products");
  }
}
