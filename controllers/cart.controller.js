import {
  getAllProductsFromCart,
  addingProductInCart,
  deleteProductFromCart,
  getProductByIdFromCart,
  updateProductByIdInCart,
} from "../services/cart.service.js";
import { v4 as uuidv4 } from "uuid";

// export async function getAllProductsFromCartC(request, response) {
//   try {
//     const allProducts = await getAllProductsFromCart();
//     console.log(allProducts.data);
//     response.send(allProducts.data);
//   } catch (error) {
//     console.log(error);
//     response.status(500).send("Failed to get Products");
//   }
// }
export async function getAllProductsFromCartC(request, response) {
  const userId = request.params.id;
  const cart = await getProductByIdFromCart(userId);
  try {
    // const userId = request.params.id; // Extract userId from request parameters
    // const cart = await getAllProductsFromCart();
    //const cart = await getAllProductsFromCartC();
    if (cart.data) {
      response.send(cart.data);
    } else {
      response.status(404).send({ msg: "Cart not found" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send("Failed to get Cart");
  }
}

export async function addingProductInCartC(request, response) {
  // const id = request.params.userId;
  const data = request.body;
  console.log(data);
  // if (
  //   !data.userId ||
  //   !data.products ||
  //   !data.products.length ||
  //   // !data.products[0].productId ||
  //   // !data.products[0].quantity ||
  //   !data.products[0].bookId || // Check for bookId in the first product
  //   !data.products[0].qty || // Check for quantity in the first product
  //   !data.price
  // ) {
  //   return response.status(400).send({ msg: "Missing required fields" });
  // }
  // const userId = data.userId;
  // const totalPrice = data.products[0].qty * data.price;
  // const addProduct = {
  //   userId,
  //   products: [
  //     {
  //       bookId: data.products[0].bookId,
  //       qty: data.products[0].qty,
  //     },
  //   ],
  //   totalPrice,
  // };
  try {
    const newCart = await addingProductInCart(addProduct);
    // console.log(addProduct);
    // movies.push({ id: v4(), ...data });
    response.status(201).send(newCart.data);
  } catch (error) {
    console.log(error);
    response.status(500).send("Failed to add the product in the cart");
  }
}
export async function deleteProductFromCartC(request, response) {
  // const { userId } = request.params;
  const userId = request.params.id;
  // data = movies.find((movie) => movie.id == id);
  try {
    const result = await getProductByIdFromCart(userId);
    if (result.data) {
      // movies = movies.filter((movie) => movie.id != id);
      await deleteProductFromCart(userId);
      response.send("product deleted successfully");
    } else {
      response.status(404).send("Product Not Found");
    }
  } catch (error) {
    console.log(error);
    response.status(500).send("Failed to delete product");
  }
}
export async function getProductByIdFromCartC(request, response) {
  const { id } = request.params;
  // console.log(id);
  let res;
  try {
    res = await getProductByIdFromCart(id);
    if (res.data) {
      response.send(res.data);
    } else {
      response.status(404).send("Product Not Found");
    }
  } catch (error) {
    response.status(500).send("Failed to get Products");
  }
}
export async function updateProductByIdInCartC(request, response) {
  // const { id } = request.params;
  const userId = request.params.id;
  const updateData = request.body;
  try {
    const existingData = await getProductByIdFromCart(userId);
    if (existingData.data) {
      const result = await updateProductByIdInCart(userId, updateData);
      response.send(result.data);
      console.log(userId, existingData.data);
    } else {
      response.status(404).send("Product Not Found");
    }
  } catch (error) {
    response.status(500).send("Failed to update the product");
  }
}
