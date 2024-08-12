import {
  getAllProductsInCart,
  addingMovie,
  deleteMovieById,
} from "../services/products.service.js";

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
  try {
    await addingProduct(addProduct);
    console.log(addProduct);
    // movies.push({ id: v4(), ...data });
    response.send(addProduct);
  } catch (error) {
    response.status(500).send("Failed to create the movie");
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
      response.send("Movie deleted successfully");
    } else {
      response.status(404).send("Product Not Found");
    }
  } catch (error) {
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
      response.send(result);
      console.log(id, existingData.data);
    }
  } catch (error) {
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
