const express = require("express");
const orderRoutes = express.Router();
const { prisma } = require("../config/prisma");

// create order
orderRoutes.post("/", async (req, res) => {
    const { first_name, last_name, email, phone, address, menu_id, notes_menu_id, subtotal, shipping_cost, total} = req.body;
	const newOrder = await prisma.transaction.create({
		data: {
			first_name, 
            last_name, 
            email, 
            phone,
            address,
            menu_id,
            notes_menu_id,
            subtotal,
            shipping_cost,
            total
		},
	});
	res.status(201).json({
		message: "Order created",
		data: newOrder,
	});
  });

module.exports = { orderRoutes };