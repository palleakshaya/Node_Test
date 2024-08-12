import { Entity } from "electrodb"; //ORM(object relational mapping -> SDK is very hard to use so to make it easier, electrodb is used)
import { client } from "../util/db.connection.js";
//client is the live connection to AWS

const products = new Entity(
  {
    model: {
      entity: "products",
      version: "2",
      service: "productsService",
    },
    attributes: {
      productId: {
        type: "string",
      },
      name: {
        type: "string",
        // required: true,
      },
      description: {
        type: "string",
      },
      price: {
        type: "number",
        // required: true,
      },
      category: {
        type: "string",
      },
      stockQuantity: {
        type: "string",
        // required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["productId"],
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
