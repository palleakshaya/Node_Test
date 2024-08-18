import { Entity } from "electrodb"; //ORM(object relational mapping -> SDK is very hard to use so to make it easier, electrodb is used)
import { client } from "../util/db.connection.js";
//client is the live connection to AWS

const products = new Entity(
  {
    model: {
      entity: "products",
      version: "3",
      service: "productService",
    },
    attributes: {
      bookId: {
        type: "string",
      },
      title: {
        type: "string",
        // required: true,
      },
      author: {
        type: "string",
      },
      price: {
        type: "number",
        // required: true,
      },
      description: {
        type: "string",
      },
      rating: {
        type: "number",
        // required: true,
      },
      category: {
        type: "string",
        // required: true,
      },
      imageURL: {
        type: "string",
        // required: true,
      },
      stock: {
        type: "number",
        // required: true,
      },
      qty: {
        type: "number",
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["bookId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
    // add your DocumentClient and TableName as a second parameter
  },
  { client, table: "products" }
);

export { products };
