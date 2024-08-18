import { Entity } from "electrodb"; //ORM(object relational mapping -> SDK is very hard to use so to make it easier, electrodb is used)
import { client } from "../util/db.connection.js";
//client is the live connection to AWS

const cart = new Entity(
  {
    model: {
      entity: "cart",
      version: "3",
      service: "productsService",
    },
    attributes: {
      userId: {
        type: "string",
      },
      totalPrice: {
        type: "number",
        // required: true,
      },
      Products: {
        type: "list",
        items: {
          type: "map",
          properties: {
            bookId: {
              type: "string",
            },
            qty: {
              type: "number",
            },
          },
        },
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["userId"],
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
  { client, table: "cart" }
);

export { cart };
