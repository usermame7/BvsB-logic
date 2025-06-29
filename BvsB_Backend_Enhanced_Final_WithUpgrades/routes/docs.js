const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BvsB Trading API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
router.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

module.exports = router;