const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const swaggerDoc = require("./swagger.json");

const app = express();

app.use(
  cors({ origin: ["http://localhost:3000", "https://moolre-test.web.app"] })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDoc, { customSiteTitle: "Moolre Test API" })
);

// All controllers should live here
app.get("/", function rootHandler(req, res, next) {
  res.redirect("/docs");
});

// Load all routes
const routes = require("./routes/index")(app);
app.use("/api/v1", routes);

module.exports = app;
