import {
  getAllProducts,
  getProductById,
  addingProduct,
  deleteProductById,
  updateProductById,
  // searchProducts,
} from "../services/products.service.js";
import { products } from "../entities/products.entity.js";
import { v4 as uuidv4 } from "uuid";

export async function getAllProductsC(request, response) {
  const { search } = request.query;

  if (!search) {
    const allProducts = await getAllProducts();
    response.send(allProducts.data);
    return;
  }
  // const lowerCaseSearchTerm = searchTerm.toLowerCase();
  // const lowerCaseSearchTerm = searchTerm.toLowerCase(); // Convert to lowercase
  const filteredData = await products.scan
    .where(
      ({ title, author, description, category }, { contains }) => `
        ${contains(title, search)} OR ${contains(author, search)} OR ${contains(
        description,
        search
      )} OR ${contains(category, search)}
          
       `
    )
    .go();

  console.log("Filtered Data:", filteredData); // Debug statement
  response.send(filteredData.data);
}

//   const allProducts = await getAllProducts();
//   // console.log(allProducts);
//   response.send(allProducts.data);
// } catch (error) {
//   console.log(error);
//   response.status(500).send("Failed to get Products");
// }
//   {
//     FilterExpression: `
//   contains(#title, :searchTerm) OR contains(#author, :searchTerm)
// `,
//     ExpressionAttributeNames: {
//       "#title": "title",
//       "#author": "author",
//     },
//     ExpressionAttributeValues: {
//       ":searchTerm": lowerCaseSearchTerm,
//     },
//   }

export async function addingProductC(request, response) {
  const data = request.body;
  console.log(data);
  const addProduct = { ...data, bookId: uuidv4() };
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
// export async function deleteProductByIdC(request, response) {
//   const { id } = request.params;
//   // data = movies.find((movie) => movie.id == id);
//   try {
//     const result = await getProductById();
//     if (result.data) {
//       // movies = movies.filter((movie) => movie.id != id);
//       await deleteProductById(id);
//       response.send("Product deleted successfully");
//     } else {
//       response.status(404).send("Product Not Found");
//     }
//   } catch (error) {
//     console.log(error);
//     response.status(500).send("Failed to delete product");
//   }
// }
// products.controller.js

export async function deleteProductByIdC(req, res) {
  const { id } = req.params;

  try {
    const result = await deleteProductById(id);
    if (result) {
      res.send({ msg: "Product deleted successfully", deletedProduct: result });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Failed to delete product");
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
// export async function searchProductsC(req, res) {
//   try {
//     const searchTerm = req.query.q;
//     const products = await searchProducts(searchTerm);
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// export async function searchProductsC(req, res) {
//   try {
//     const { search: searchTerm } = req.query;
//     console.log("Search Term:", searchTerm);

//     // Call the searchProducts service function, passing the searchTerm
//     const products = await searchProducts(searchTerm);

//     res.json(products.data);
//   } catch (error) {
//     console.error("Error in searchProductsC:", error);
//     res.status(500).json({ error: error.message });
//   }
// }

// export async function searchProductsC(req, res) {
//   try {
//     const { q: searchTerm } = req.query;
//     console.log("Search TermB:", searchTerm); // Debug statement

//     if (!searchTerm) {
//       const allProducts = await getAllProducts();
//       res.send(allProducts.data);
//       return;
//     }

//     const filteredProducts = await searchProducts(searchTerm);
//     res.send(filteredProducts.data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
