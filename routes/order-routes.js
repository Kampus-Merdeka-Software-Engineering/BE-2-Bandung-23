const express = require("express");
const orderRoutes = express.Router();
const { prisma } = require("../config/prisma");

// create order
orderRoutes.post("/", async (req, res) => {
  const { first_name, last_name, email, phone, address } = req.body;
  const newOrder = await prisma.transaction.create({
    data: {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    },
  });
  res.status(201).json({
    message: "Order created",
    data: newOrder,
  });
});

// get transaction_id
orderRoutes.get("/payment", async (req, res) => {
  const payment = await prisma.transaction.findFirst({
    select: {
      transaction_id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  res.status(200).send(payment);
});

module.exports = { orderRoutes };
