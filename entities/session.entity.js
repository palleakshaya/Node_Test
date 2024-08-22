import { Entity } from "electrodb"; // ORM - object relational mapping
import { client } from "../util/db.connection.js";

const Session = new Entity(
  {
    model: {
      entity: "session",
      version: "1",
      service: "sessionService",
    },
    attributes: {
      username: {
        type: "string",
        required: true,
      },
      token: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["token"],
        },
        sk: {
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "session" }
);

export { Session };
