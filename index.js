require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { menuRoutes } = require("./routes/menu-routes");
const { recommendationRoutes } = require("./routes/recommendation-routes");
const { orderRoutes } = require("./routes/order-routes");
const { homeRoutes } = require("./routes/home-routes");
const app = express();
const PORT = process.env.PORT || 3000;

const loggerMiddleware = (req, res, next) => {
  const now = new Date();
  const formattedTime = now.toLocaleDateString();
  const method = req.method;
  const url = req.url;
  const status = req.statusCode;
  console.log(`[${formattedTime}] ${method} ${url} - ${status}`);
  next();
};

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(loggerMiddleware);

// menu routes
app.use("/menu", menuRoutes);

// recommendation routes
app.use("/recommendation", recommendationRoutes);

// order routes
app.use("/order", orderRoutes);

// home routes
app.use("/home", homeRoutes);

app.all("*", async (req, res) => {
  res.status(404).send("Routes you're looking is not found");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is already running at ${PORT}`);
});
