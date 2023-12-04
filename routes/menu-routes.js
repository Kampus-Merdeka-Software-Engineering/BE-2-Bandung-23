const express = require("express");
const menuRoutes = express.Router();
const { prisma } = require("../config/prisma");

// get all menu
menuRoutes.get("/", async (req, res) => {
  const menu = await prisma.menu.findMany();
  res.status(200).send(menu);
});

// get menu by type
menuRoutes.get("/:type", async (req, res) => {
  const menu = await prisma.menu.findMany({
    where: {
      menu_type: req.params.type,
    },
  });
  if (!menu) res.status(404).json({ message: "Menu not found" });
  else res.status(200).send(menu);
});

module.exports = { menuRoutes };
