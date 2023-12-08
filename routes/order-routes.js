const express = require("express");
const orderRoutes = express.Router();
const { prisma } = require("../config/prisma");

// create order
orderRoutes.post("/", async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    address,
    // menu_id,
    // sum_menu_id,
    // notes_menu_id,
    // subtotal,
    // shipping_cost,
    // total,
  } = req.body;
  const newOrder = await prisma.transaction.create({
    data: {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      // menu_id: parseInt(req.body.menu_id),
      // sum_menu_id: parseInt(req.body.sum_menu_id),
      // notes_menu_id: req.body.notes_menu_id,
      // subtotal: parseInt(req.body.subtotal),
      // shipping_cost: parseInt(req.body.shipping_cost),
      // total: parseInt(req.body.total),
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
  });
  res.status(200).send(payment);
});

module.exports = { orderRoutes };
