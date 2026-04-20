import swaggerJsdoc from "swagger-jsdoc";
import router from "./router.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Simple Express API",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./router.js"],
};

export const swaggerSpec = swaggerJsdoc(options);
