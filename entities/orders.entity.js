import { Entity } from "electrodb";
import { client } from "../util/db.connection.js";

const orders = new Entity(
  {
    model: {
      entity: "orders",
      version: "2",
      service: "ordersService",
    },
    attributes: {
      orderId: {
        type: "string",
      },
      userId: {
        type: "string",
      },
      products: {
        type: "list",
        items: {
          type: "map",
          properties: {
            productId: {
              type: "string",
            },
            quantity: {
              type: "number",
            },
          },
        },
      },
      totalPrice: {
        type: "number",
      },
      orderDate: {
        type: "string",
      },
      status: {
        type: "string",
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["userId"],
        },
        sk: {
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "orders" }
);

export { orders };
